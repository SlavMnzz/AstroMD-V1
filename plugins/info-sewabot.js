let handler = async (m, { conn, text, usedPrefix, command }) => {
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* Rp.2.000 (1 minggu)
┊⫹⫺ *Normal:* Rp.5.000 (1 bulan)
┊⫹⫺ *Standar:* Rp.10.000 (2 bulan)
┊⫹⫺ *Pro:* Rp.25.000 (4 bulan)                                              
┊⫹⫺ *Vip:* = Rp.45.000 (6 bulan & 1 bulan *Premium*) *Discount*
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* Rp.2.000 (1 minggu)
┊⫹⫺ *Normal:* Rp.4.000 (1 bulan)
┊⫹⫺ *Pro:* Rp.6.000 (4 bulan)
┊⫹⫺ *Vip:* Rp.20.000 (8 bulan)                               
┊⫹⫺ *Permanent:* Rp.35.000 (Unlimited) *Discount*
╰═┅═━––––––๑

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah

▌│█║▌║▌║║▌║▌║█│▌
`
conn.reply(m.chat, info, m)
await m.reply(`${nomorown} Itu nomor ownerKu Jika Ingin Sewa Bot`)
}

handler.help = ['listpanel']
handler.tags = ['main']
handler.customPrefix = /^(sewa|buy)/i
handler.limit = false
handler.command = new RegExp

module.exports = handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const rand = [
    "https://telegra.ph/file/8813270910b3db0caf3c5.jpg",
    "https://telegra.ph/file/f8188362557a0e15dc991.jpg",
    "https://telegra.ph/file/f27960f15c9fdbadf1248.jpg",
    "https://telegra.ph/file/195f7f8832fa7c49bfeb9.jpg"
]