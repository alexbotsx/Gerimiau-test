let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝙂𝙚𝙧𝙞𝙈𝙞𝙖𝙪 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙚𝙧𝙧𝙚🫦 ${pesan}`
let teks = `*𝘼𝙘𝙩𝙞𝙫𝙖𝙩𝙚 𝙥𝙡𝙖𝙣𝙩𝙖 𝙙𝙚 𝙢𝙧𝙙𝙖🌱🫦*\n${oi}\n\n*＠ｃｅｏｇｅｒｉｐｉｕｍ．ｄｚｎ🫶🏻*\n`
for (let mem of participants) {
teks += `🪄✨ᝰ.ᐟ @${mem.id.split('@')[0]}\n`}
teks += `GeriMiau`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
