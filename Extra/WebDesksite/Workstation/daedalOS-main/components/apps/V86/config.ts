export const BOOT_CD_FD_HD = 0x213;
export const BOOT_FD_CD_HD = 0x231;

export const config = {
  autostart: true,
  bios: { url: "/Program Files/Virtual x86/bios/seabios.bin" },
  filesystem: {
    basefs: "/.index/fs.9p.json",
    baseurl: "/",
  },
  log_level: 0,
  memory_size: 1024 * 1024 * 1024,
  network_relay_url: "wss://relay.widgetry.org/",
  vga_bios: { url: "/Program Files/Virtual x86/bios/vgabios.bin" },
  vga_memory_size: 32 * 1024 * 1024,
  wasm_path: "/Program Files/Virtual x86/v86.wasm",
};

export const libs = ["/Program Files/Virtual x86/libv86.js"];

export const saveExtension = ".save.bin";
