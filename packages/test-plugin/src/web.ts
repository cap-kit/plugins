/**
 * @file web.ts
 * This file contains the web implementation of the TestPlugin.
 * It defines a class that extends the WebPlugin class and implements the
 * TestPlugin interface, providing the required functionality for web platforms.
 */
import { WebPlugin } from '@capacitor/core';

import type { TestPlugin } from './definitions';

/**
 * Class representing the web implementation of the TestPlugin.
 * This class extends the WebPlugin class and implements the TestPlugin interface.
 * It provides a base implementation for web-based functionality of the plugin.
 */
export class TestWeb extends WebPlugin implements TestPlugin {
  /**
   * Echoes a value back for the web platform.
   * This method is a basic implementation example, primarily for testing
   * or validating communication with the plugin.
   *
   * @param options - An object containing a `value` property to be echoed back.
   * @returns A promise resolving to an object containing the echoed `value`.
   *
   * @example
   * ```typescript
   * import { Test } from '@cap-kit/test-plugin';
   *
   * const result = await Test.echo({ value: 'Hello, World!' });
   * console.log(result.value); // Output: 'Hello, World!'
   * ```
   */
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    // Note: On the web, reading 'capacitor.config.ts' requires specific build setups.
    // We pass the value through as-is for parity, or you can implement logic to read
    // from a global config object if your app exposes one.
    return options;
  }

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns Promise that resolves with the plugin version
   * @throws Error if getting the version fails
   *
   * @example
   * ```typescript
   * import { Test } from '@cap-kit/test-plugin';
   *
   * const version = await Test.getPluginVersion();
   * console.log(version.version); // Output: 'web'
   * ```
   */
  async getPluginVersion(): Promise<{ version: string }> {
    return { version: 'web' };
  }
}
