import Foundation

/**
 * Helper struct to manage the plugin configuration.
 * It parses the values from capacitor.config.json
 */
public struct TestConfig {

    // Define configuration keys for consistency
    private struct Keys {
        static let customMessage = "customMessage"
    }

    // Default values
    private let defaultCustomMessage = " (from config)"

    // Public accessible properties
    public var customMessage: String

    /**
     * Initialize with the config dictionary from the plugin.
     */
    init(config: [AnyHashable: Any]?) {
        let config = config ?? [:]

        // Parse customMessage with a default fallback
        self.customMessage = config[Keys.customMessage] as? String ?? defaultCustomMessage
    }
}
