let handler = async (m, { conn, text, usedPrefix, command }) => {

var chan = `❏––––––『 *SCRIPT* 』––––––❏
jadi bot murmer Langsung Chat aja Ownernya
wa.me/${nomorown}

🍜 Link SC :
https://sociabuzz.com/ichanzx/b/bot-zx-v2-premium

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`
let menu = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
let thumb = 'https://telegra.ph/file/45223484d6ecda4f0c78f.jpg'

await m.reply(chan)
}

handler.help = ['sc']
handler.tags = ['main']
handler.command = /^(jadibot)$/i

module.exports = handler