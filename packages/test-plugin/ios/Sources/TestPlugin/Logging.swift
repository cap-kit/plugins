import Capacitor

/**
 * Utility function for logging messages with a custom prefix.
 *
 * This function is designed to format log messages for the Test plugin. It prepends the log output
 * with a custom prefix (`⚡️  Test -`) to easily identify logs associated with this plugin.
 *
 * @param items - Items to log, stringified and logged in order.
 * @param separator - A string used to separate the logged items. Defaults to a single space (`" "`).
 * @param terminator - A string appended to the end of the log message. Defaults to a newline (`"\n"`).
 *
 * Example Usage:
 * ```
 * log("This is a message", "with multiple parts", separator: ", ")
 * // Output: ⚡️  Test - This is a message, with multiple parts
 * ```
 *
 * Note:
 * - This function uses Capacitor's `CAPLog.print` for outputting log messages.
 * - Multiple items use `separator` and end with `terminator`.
 */
func log(_ items: Any..., separator: String = " ", terminator: String = "\n") {
    // Prefix the log with "⚡️  Test -"
    CAPLog.print("⚡️  Test -", terminator: separator)

    // Iterate over the provided items and print each one
    for (itemIndex, item) in items.enumerated() {
        // Use the specified separator between items, and the terminator for the final item
        CAPLog.print(item, terminator: itemIndex == items.count - 1 ? terminator : separator)
    }
}
