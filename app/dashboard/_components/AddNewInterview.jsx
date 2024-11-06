"use client"
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/utils/db'
import { chatSession } from '@/utils/GeminiAIModal'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { LoaderCircle } from 'lucide-react'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const isValidJson = (jsonString) => {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
};

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const router = useRouter();
    const { user } = useUser();

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
    
        const InputPrompt = `Job position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}, Depends on Job Position, Job Description & Years of Experience give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Interview question along with Answer in JSON format. Give us question and answer field on JSON.`;
    
        try {
            const result = await chatSession.sendMessage(InputPrompt);
            let MockJsonResp = result.response.text();
    
            // Log the raw JSON response for debugging
            console.log("Raw JSON Response:", MockJsonResp);
    
            // Clean up the JSON response to remove unexpected characters
            const cleanJsonResponse = MockJsonResp
                .replace(/```json/g, '')
                .replace(/```/g, '')
                .replace(/\n/g, '')
                .replace(/\r/g, '')
                .replace(/\\n/g, '')
                .replace(/\\/g, '')
                .trim();
    
            // Log the cleaned JSON for debugging
            console.log("Cleaned JSON Response:", cleanJsonResponse);
    
            // Validate the cleaned JSON
            if (!cleanJsonResponse.startsWith('{') && !cleanJsonResponse.startsWith('[')) {
                console.error("Invalid JSON format: Does not start with '{' or '['");
                setLoading(false);
                return; // Exit early
            }
    
            // Check if the cleaned JSON is valid before parsing
            if (!isValidJson(cleanJsonResponse)) {
                console.error("Invalid JSON format:", cleanJsonResponse);
                setLoading(false);
                return; // Exit early
            }
    
            // Try parsing the cleaned JSON response
            let parsedJsonResponse = JSON.parse(cleanJsonResponse);
            console.log("Parsed JSON Response:", parsedJsonResponse);
    
            // Check the length of parsedJsonResponse for valid response format
            if (Array.isArray(parsedJsonResponse) && parsedJsonResponse.length > 0) {
                const resp = await db.insert(MockInterview)
                    .values({
                        mockId: uuidv4(),
                        jsonMockResp: JSON.stringify(parsedJsonResponse), // Store the JSON directly
                        jobPosition: jobPosition,
                        jobDesc: jobDesc,
                        jobExperience: jobExperience,
                        createdBy: user?.primaryEmailAddress?.emailAddress,
                        createdAt: moment().format('DD-MM-yyyy')
                    }).returning({ mockId: MockInterview.mockId });
    
                console.log("Inserted ID:", resp);
                if (resp) {
                    setOpenDialog(false);
                    router.push('/dashboard/interview/' + resp[0]?.mockId);
                }
            } else {
                console.error("ERROR: Invalid response format. Parsed response is not an array or is empty.");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            // Handle other errors here (e.g., API call failures)
        } finally {
            setLoading(false);
        }
    }
    
    

    return (
        <div>
            <div className='p-10 border rounded-lg bg-secondary
            hover:scale-105 hover:shadow-md cursor-pointer
            transition-all border-dashed'
                onClick={() => setOpenDialog(true)}
            >
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Tell us more about your job interviewing</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2>Add Details about your job position/role, Job description and years of experience</h2>

                                    <div className='mt-7 my-3'>
                                        <label>Job Role/Job Position</label>
                                        <Input placeholder="Ex. Full Stack Developer" required
                                            onChange={(event) => setJobPosition(event.target.value)}
                                        />
                                    </div>
                                    <div className=' my-3'>
                                        <label>Job Description/ Tech Stack (In Short)</label>
                                        <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc"
                                            required
                                            onChange={(event) => setJobDesc(event.target.value)} />
                                    </div>
                                    <div className=' my-3'>
                                        <label>Years of experience</label>
                                        <Input placeholder="Ex.5" type="number" max="100"
                                            required
                                            onChange={(event) => setJobExperience(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                    <Button type="submit" disabled={loading}>
                                        {loading ?
                                            <>
                                                <LoaderCircle className='animate-spin' /> Generating from AI
                                            </> : 'Start Interview'
                                        }
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview;
