//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/+225 0140468631, https://wa.me/+225 0140468631";
global.sudo = process.env.SUDO || "+225 0140468631";
global.owner = process.env.OWNER_NUMBER || "PUT YOUR OWNER NUMBER";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "PUT YOUR SESSION eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUM4RVpoNW1XZG11RURoMysrSWh6TEJmWkJ3Z2pXbkorenRpTlpJZWowTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTml6c0RiVDgreEZZK2hSN1VBVzd4S2tINmlMbGpWU2NWZk1YRmszekNYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQzVQeHdwRk5NbHhxY2tyQ2cxWUF6QmsxVzFtd3VNYy9UaHFtTWdmeWxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SHFCWDYwYU9XeHZwb3B5eWxnWE9uOFNkRVVIQnZ4WXRuazd0b3FyTTJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHNnVHelZSL1dIWHQ0a24zeTQyWE5UR3ROMnBHbEpZUUNZd3h2N3EvMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpZZUE2QkJkU0RCWnpvblpzbWtGT2U4MmdpaVRvV3h0bnhMZmxXUVRCbjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVB1MVRzSjY5MjJRNUkxUWlDUm1kcE1pRmtIM2oyc2RJWlZNZ3pLUUZtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3JzVys0c1BYa3A0ZHdHcnBRSU5Pbnk3N1I5bXVYbWtPaFVnNThmbTBHQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNES3RkY1k3Y2UwTGRsdG9QSlEybXNyV1pHSmxvblkrZUtHNzlFTGpMTmlLOEJTblVjVHlUQ1J2dDdXdDZNdjZGTDN5QXdBV3RMOHFXaEo5b0J2eGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJBS1RGWXFTaFlxVE9LWHQvd3d3U01lQ1ZBakR2YXJtYU10MmJSYUpnelg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNZkhuV0Rrd1FQaTBVM3VOMmljRTdRIiwicGhvbmVJZCI6ImEzNGI0ZGM5LTkyNTgtNGVkNS1hODI2LWNjYTBjMWE5MmY2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSWVzTHVObFBzeXZyVkdpdGMvczNQM24vU1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEp5Tk5Fbm4yRExqb2JudGM1WUxOZlYrT2VVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxMRUROUlJKIiwibWUiOnsiaWQiOiIyMjU0MDQ2ODYzMToyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXpEb0xjQkVONll0TGtHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ3hnaytqZktUbDRwaGJJbzNjdmpYSGJRVkNCU2ZGd1RlQXhGRWRVUEVGYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaUpuUHl1Q041QkVNYjNSUG1IS3AxNWZhWHo1SklKQUU1TWg2TDRxQUt6dUtJQWRWRUo3WkhCOElZdzFNRXN3YW1zamxrQlk5THcwaWpwMzNOcUhzQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlhWUTdhTlF1RGM4WEJla2NUSU1aV3hBWVBxNDU0eC9HV2dLelA1S0h4QVVydzBpeXpEZE4wMlp3VEdSOUtaVlZpQU01QjNsMUd6VVVIaVhpKzUvQ2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NDA0Njg2MzE6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXNZSlBvM3lrNWVLWVd5S04zTDQxeDIwRlFnVW54Y0UzZ01SUkhWRHhCWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTAwNTU0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPRXAifQ==
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF🌹⃟⃢👑𝙂𝞗𝘿𝄟✮͢≛✮⃝ 𝙎𝞓𝙏𝞗𝞒𝞗🌹⃟⃢👑`",
  author: process.env.PACK_AUTHER || "🌹⃟⃢👑𝙂𝞗𝘿𝄟✮͢≛✮⃝ 𝙎𝞓𝙏𝞗𝞒𝞗🌹⃟⃢👑",
  packname: process.env.PACK_NAME || "🌹⃟⃢👑𝙂𝞗𝘿𝄟✮͢≛✮⃝ 𝙎𝞓𝙏𝞗𝞒𝞗🌹⃟⃢👑",
  botname: process.env.BOT_NAME || "🌹⃟⃢👑𝙂𝞗𝘿𝄟✮͢≛✮⃝ 𝙎𝞓𝙏𝞗𝞒𝞗🌹⃟⃢👑",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑𝙂𝞗𝘿𝄟✮͢≛✮⃝ 𝙎𝞓𝙏𝞗𝞒𝞗🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
