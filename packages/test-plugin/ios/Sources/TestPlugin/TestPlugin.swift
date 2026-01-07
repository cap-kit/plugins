import Foundation
import Capacitor

/**
 * This file defines the Capacitor bridge for the Test plugin.
 *
 * Documentation reference:
 * https://capacitorjs.com/docs/plugins/ios
 */

@objc(TestPlugin)
public class TestPlugin: CAPPlugin, CAPBridgedPlugin {

    // Configuration instance
    private var config: TestConfig?

    /**
     * Called when the plugin is loaded.
     */
    override public func load() {
        log("Loading plugin")
        self.config = TestConfig(
            config: self.getConfig() as? [String: Any] ?? [:]
        )
    }

    /// Plugin version (Dynamic read from the Bundle Info.plist)
    private var pluginVersion: String {
        let bundle = Bundle(for: type(of: self))
        return bundle.infoDictionary?["CFBundleShortVersionString"] as? String ?? "0.0.1"
    }

    /// The unique identifier for the plugin.
    public let identifier = "TestPlugin"

    /// The name used to reference this plugin in JavaScript.
    public let jsName = "Test"

    /**
     * A list of methods exposed by this plugin. These methods can be called from the JavaScript side.
     * - `echo`: A method that accepts a string and returns the same string.
     * - `getPluginVersion`: A method that returns the version of the plugin.
     */
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    /// An instance of the implementation class that contains the plugin's core functionality.
    private let implementation = Test()

    /**
     * Echoes a string back to JavaScript.
     *
     * @param call Capacitor plugin call containing the `value` parameter.
     */
    @objc func echo(_ call: CAPPluginCall) {
        var value = call.getString("value", "")
        log("Echoing value: \(value)")

        // Append the custom message from the configuration
        if let configMessage = config?.customMessage {
            value = value + configMessage
        }

        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    /**
     * Returns the plugin version.
     */
    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }
}
