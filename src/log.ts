import log = require("npmlog")
import { MessageObject } from "npmlog"

log.level = "silent"
log.prefixStyle = {}
log.addLevel("ok", 5000, { fg: "green" }, "✔")
log.addLevel("bad", 5000, { fg: "red" }, "✖")

// In the interests of using a single interface for writing output, this sets up
// a "stdout" log level which is never written to stderr by npmlog but is instead
// handled here and passed directly to process.stdout
log.addLevel("stdout", Infinity, { fg: "green" })
log.on("log.stdout", (log: MessageObject) => {
  process.stdout.write(log.prefix + log.message)
})

export default log
module.exports = log