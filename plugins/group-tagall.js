let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `𝙂𝙚𝙧𝙞𝙈𝙞𝙖𝙪 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙚𝙧𝙧𝙚🫦${pesan}`
  let teks = `@ceogeripium.dzn
           🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨 

➜ ETIQUETA:*\n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `🪄✨ @${mem.id.split('@')[0]}\n`}
  teks += `GeriMiau`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler
