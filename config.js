//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/hb58io.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27693798048";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/x1gvh2.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdyRWZHM1ExVTMzcWljcUVQYlpqWU1DZ3N1UnJxcW5xOGIwamRVS09Vcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXdQUEplN1FqVm01SkNWZlNUanIyZGhjZXcxSDQ3UTZrSGNOWEg5QU1Hdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RXV3aUpUVmNNNDFqWWxXYWRhcjBuUW9DbzZhcEwrK2M5WExva2RkRjNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNHZlVDBESUhyUUZOcE1ERjFHelNRYlprNnc0d0g0OXdKK2pGQmo2OXcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNS2QwbzhhaDZNd0M2K3FDVG5zL2ZQU2NwRTV1ZVJWM2crbVRTS0lpSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJFcTQwYVJXUUoweHAyTlJOR2lFNW5keGFJRTFmbjlQaUQwVTV4RjJIQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUEzZnB2NEtEZmhTaTJuWElyUnFrczI5L1FmeDZjbFl4S2lKd2JyV2JXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnhROVVmdWY0c04raHJROGhGdnlNcHZHQzVmQ0pBUnVsZFpUaTNBUUpDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQdUtsQm5TNGJac0FxdkRLTXJGOHBPQnVld0lWam93bFhhc1lvSWw5T3I1MzZoQllXWjlwaTZaQ21QTjVjK1dLbmc4b2xsQTM5MElBbngvenV2eUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJZaDVOMnozakNhbzZDbUFGMU1RWVdKNCtWOFpQQlZOQ2VxbnpiQitxTzg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtdlkxQ3lEU1NpdU1jbEhMVllxVDdRIiwicGhvbmVJZCI6IjgxNDAyMGVhLWI2NTQtNGM2NS04NjliLWMxNGI1MTVlNmNjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMODdtOUlIdkVRMG5IQS9vUmprTzN0Wi9kNUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDUzOEI5a3poVVJsVlZyUFRBMnpCa294b1IwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE0UTJEMUxWIiwibWUiOnsiaWQiOiIyNzY5Mzc5ODA0ODoyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJjaMy2dWNrecy24LiFXuKAou+7jOKAol7guIUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s3dnFxZ0dFTSt1cmJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl0TWRyR1NtMDVPYmRJeWQyR000dUtvTS9SdGtsZFV4bHFBMTBaMm41aTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imc1ZU0xaHBOQWxlYWdsRzFCS3pkdE5OZzFUbHZ1cEZLLzhGY3BFdjFaS0svalZnL09KZm9zOUpnZ0Q1Z3g0eER3eTM0SUp3M1h5em1GcFprRWNvbkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrNXYvNENEQVNSRGMvdDVpeWIvT1RyaXEvMit0R09IVkIwWEFpYm1ESThmTG1pK0U4ZXhIY1RERlZUSlhKRWtKOEVxekZzN3JIOHVyWWxEeHN3UThBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjkzNzk4MDQ4OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZiVEhheGtwdE9UbTNTTW5kaGpPTGlxRFAwYlpKWFZNWmFnTmRHZHArWXYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA4OTM2NjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDRoIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`hi, I'm Chucky....wanna fuck🙂? ™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "c y l e e",
  botname: process.env.BOT_NAME || "Chuck 2.0",
  ownername: process.env.OWNER_NAME || "Chucky Z ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
