/*
   * Base Simpel
   * Created By DYCODERS.XYZ
*/
const functionn = require('./lib/functions')

global.rowner = [["6282325781726", "razael", true]];
global.botname = "Razael - MD"
global.ownername = "razael"
global.owner = "6282325781726"
global.idch = "120363303267333730@newsletter"

global.bug = {
   aaa: "釢凁潗櫷⑻葛潗勷潗撏犪瑏虁蜔饾悇饾悧蜏饾悇饾悅谈汀饾悢汀汀蜏饾悡饾悎廷饾悗饾悕馃摐",
   bbb: "饾悅蜖蜏饾悪廷谈饾悁蛡饝垉袒汀痛饾悊谈蜖饾悗蜏饾悆 馃獧",
   ccc: "釟� 饾悆蜖潭谈饾悗廷饾悓汀饾悎饾悕蜏饾悁饾悡汀饾悎蜏饾悗谈饾悕 饾悗廷谭處饾悈 饾悪廷汀饾悇蛯虁蛼饾悡蜖 鈿楋笍"
}
//hiyasan

global.dycoders = '`'
global.woidy = '->.'
global.hiasan = '> .'
global.hiasanB = '╭─ •'
global.hiasanA = '╰──── •'
global.mt = '> '
global.mtB = `> `
global.mtA = `> `
//Thumbnail 
global.thumbnail = 'https://telegra.ph/file/662564e95a8fe4c21cb33.jpg'
global.saluran = 'https://whatsapp.com/channel/0029VagpRL811ulLEm4TnO0h'
global.github = 'dycoders.xyz'

//Sticker
global.packname = 'by'
global.author = 'razael'
global.tag = `© 2024 | Razael - MD`
//Plek
global.foter = 'Razael - MD'
global.Tasistent = `DYCODERS`
global.copyright = `© DYCODERS`
global.email = 'xx@gmail.com' // kalo mau buypanel work, gunakan email yang terdaftar di saweria.co

//Mess
global.mess = {
owner: `Only Owner, Cannot be Used by Users`,
bugrespon: `Processs...`,
success: `Successfully sent to target`,
group: `Feature Only Used For Groups !`,
Badmin: `Features can be used after the bot becomes an admin !`,
limit: `Your limit has run out, please wait tomorrow to reset the limit`,
premium: `Only Users Premium`,
}

global.Func = functionn
global.Scraper = {
    Ai: require('./lib/scrape/Ai'),
    Generate: require('./lib/scrape/Generate'),
    Anime: require('./lib/scrape/Anime'),
    Samehadaku: require('./lib/scrape/Samehadaku'),
    Download: require('./lib/scrape/Download'),
    Tools: require('./lib/scrape/Tools'),
    Search: require('./lib/scrape/Search'),
    Emi: require('./lib/scrape/emi'),
    Spotify: require('./lib/scrape/Spotify'),
    Uploader: require('./lib/scrape/uploader'),
    Stalk: require('./lib/scrape/Stalk'),
    Internet: require('./lib/scrape/Internet'),
    Islam: require('./lib/scrape/Islam.js'),
    Convert: require('./lib/scrape/converter'),
    Otakudesu: require('./lib/scrape/otakudesu'),
    Prodia: require('./lib/scrape/Prodia'),
    Meganei: require('./lib/scrape/Meganei'),
    Vn: require('./lib/scrape/Voice.js'),
    YTnew: require('./lib/scrape/ytdlNew'),
    yt2mate: require('./lib/scrape/yt2mate'),
    Ytdl: require('./lib/scrape/ytdl')
};

global.media = {
    openAi: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    geminiPro: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    bing: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    bard: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    bc: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    gpt: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    tqto: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    dystopia: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    hercai: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg"
}
global.randomThumb = [
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg"
];
//SETTINGS DO (DIGITAL OCEAN)
global.token_do = ''



//SETTINGS PANEL
global.domain = "https://publicpanelasta.xyydycoders.xyz"
global.apikey = "ptla_eqOwQa88wrI1ob3DdsaHlWYv6Cle4XTY9ol7kuuuuWE"
global.capikey = "ptlc_DeUySX6VgKm5xitEbArMbdGYaybU5k5UFZQJs39tE37"
global.eggnya = "15"
global.locnya = "1"

//DATABASE 
global.limitawal = 10
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
//Welcome
global.wlcm = []
global.wlcmm = []

//Database game 
global.family100 = {};
global.suit = {};
global.tictactoe = {};
global.tebakbendera = {};
global.caklontong = {};
global.tebakgambar2 = {};
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 10000 // Balance maksimal


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
