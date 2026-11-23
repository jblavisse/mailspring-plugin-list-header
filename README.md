# List Header for Mailspring

Adds a header above [Mailspring](https://getmailspring.com)'s thread list and drafts list: the folder name, the account it belongs to, and a compose button. The list gains breathing room at the top and you always know where you are.

```
Inbox                                    ✎
All Accounts
─────────────────────────────────────────
Ada Lovelace                         09:05
…
```

- Folder names and labels use Mailspring's own translations, so they follow your interface language.
- The compose button opens a new message, like **File → New Message**.
- Built on Mailspring's standard theme variables: it follows the active theme's colors.

Looks best with **[mailspring-theme-graphite](https://github.com/jblavisse/mailspring-theme-graphite)**. The title lines up with the avatars of **[mailspring-plugin-avatars](https://github.com/jblavisse/mailspring-plugin-avatars)**.

## Install

**From a ZIP**

1. Download this repository (Code → Download ZIP) and unzip it.
2. In Mailspring: **Developer → Install a Plugin…**, then pick the unzipped folder.
3. Restart Mailspring.

**From Git (to follow updates)**

```bash
git clone https://github.com/jblavisse/mailspring-plugin-list-header.git
ln -s "$PWD/mailspring-plugin-list-header" "$HOME/Library/Application Support/Mailspring/packages/mailspring-plugin-list-header"
```

On Linux, the packages folder is `~/.config/Mailspring/packages`. Restart Mailspring.

## Privacy

No network request, no stored data.

## Compatibility

Mailspring **1.26** or later, in the split and list layouts.

## License

[GPL-3.0-or-later](LICENSE), the same license as Mailspring.
