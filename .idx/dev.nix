{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
      "bradlc.vscode-tailwindcss"
      "Catppuccin.catppuccin-vsc-icons"
      "christian-kohler.npm-intellisense"
      "christian-kohler.path-intellisense"
      "dsznajder.es7-react-js-snippets"
      "jolaleye.horizon-theme-vscode"
      "mhutchie.git-graph"
      "PulkitGangwar.nextjs-snippets"
      "sndst00m.vscode-native-svg-preview"
      "streetsidesoftware.code-spell-checker"
      "streetsidesoftware.code-spell-checker-russian"
      "wix.vscode-import-cost"
      "formulahendry.auto-rename-tag"
      "oderwat.indent-rainbow"
      "DotJoshJohnson.xml"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}