/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:GqAjrb0UyPF2@ep-noisy-sound-a507sy04.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };