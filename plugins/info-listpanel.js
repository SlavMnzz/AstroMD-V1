let handler = async (m, { conn, text, usedPrefix, command }) => {

var chann = `Berikut ini adalah list Jasa Bot Wa dari *FIRMAN OFFC* ⤵️\n

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
𝗙𝗶𝗿𝗺𝗮𝗻 𝗢𝗙𝗖 | 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗠𝗮𝗿𝗸𝗲𝘁𝗣𝗹𝗮𝗰𝗲
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

_*⚡READY PANNEL BOT BY MANG FIRMAN OFC⚡*_
_📮RAM 1 GB CPU 30% RP 2.000 / BULAN_
_📮RAM 2 GB CPU 60% RP 3.000 / BULAN_
_📮RAM 3 GB CPU 80% RP 4.000 / BULAN_
_📮RAM 4 GB CPU 110% RP 5.000 / BULAN_
_📮RAM 5 GB CPU 140% RP 6.000 / BULAN_
_📮RAM 6 GB CPU 170% RP 7.000 / BULAN_
_📮RAM 7 GB CPU 180% RP 8.000 / BULAN_
_📮RAM 8 GB CPU 190% RP 9.000 / BULAN_
_📮RAM & CPU UNLIMITED 10.000 / BULAN_

*KEUNTUNGAN PANEL :*
- BIKIN BOT LEBIH MUDAH
- HEMAT RUANG PENYIMPANAN
- TIDAK BOROS KOUTA
- BOT FAST RESPON
- WEB PANEL DICLONE BOT TETAP ON 24 JAM
- HP GK PANAS SAAT RUN BOT

*_⚡JOIN RESELLER PANEL⚡_*
_HARGA JOIN RESELLER PANEL : *Rp. 10.000*_

*KEUNTUNGAN JOIN RESELLER*
- PERMANENT AKSES
- BISA JUALAN PANEL
- GARANSI 5 HARI
- BISA BIKIN SRV PANEL UNLI
- BEBAS BUAT SERVER PANEL SENDIRI

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*_⚡READY ALL SCRIPT ⚡_*
- SC CREATE PANEL
- SC BOT MD FITUR 400+
- SC BOT BUG BIASA
- SC BOT PUSHKONTAK
- SC BOT PUSHKONT + BUG
- SC BOT JPM

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*_OPEN JASA :_*
- JASA RUN
- JASA SHARE
- JASA BUG JASA UNBANNED WA KENON
- JASA INSTALL BOT

*_OPEN MURID :_*
- MURBUG
- MURPUSH
- MURBOT

*_JB & LAINNYA :_*
- MC / REKBER
- TOPUP GAME 
- SEWA BOT MD

*MINAT ? CHAT WHATSAPP ADMIN :*
https://wa.me/6281346214917 (MangFirmanOFC)

*LINK GRUP PANEL + BOT :*
https://chat.whatsapp.com/InjaHWRFgHiKLyMxSRNYkL

*WEBSITE :*
https://lynk.id/mang_firmann
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬`
conn.sendFile(m.chat, pickRandom(rand), 'store.jpg', `${chann}`, m)
}

handler.help = ['listpanel']
handler.tags = ['main']
handler.command = /^(store)$/i

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