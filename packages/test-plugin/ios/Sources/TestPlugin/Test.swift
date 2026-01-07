import Foundation

/**
 * Native implementation for the Test Capacitor plugin.
 *
 * This class contains platform logic only and does not depend on Capacitor APIs.
 */
@objc public class Test: NSObject {
    /**
     * Returns the provided string unchanged.
     *
     * @param value Input string.
     * @return The same string.
     */
    @objc public func echo(_ value: String) -> String {
        log(value)
        return value
    }
}
