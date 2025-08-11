import { vi } from 'vitest';

if (!global.crypto) {
  global.crypto = require('crypto').webcrypto;  // Polyfill for Node 16
}

vi.mock('vuex', () => ({
  mapGetters: vi.fn(),
  mapActions: vi.fn(),
}));