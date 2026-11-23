// List header for Mailspring: folder name, account and a compose button above the thread list
// and the drafts list. Uses Mailspring's own translations.
const {
  React,
  ComponentRegistry,
  WorkspaceStore,
  FocusedPerspectiveStore,
  AccountStore,
  Actions,
  localized,
} = require('mailspring-exports');

const h = React.createElement;

function headerState() {
  const p = FocusedPerspectiveStore.current();
  const ids = (p && p.accountIds) || [];
  const account = ids.length === 1 ? AccountStore.accountForId(ids[0]) : null;
  return {
    title: localized((p && p.name) || ''),
    subtitle: account ? account.emailAddress : ids.length > 1 ? localized('All Accounts') : '',
  };
}

const PENCIL = h(
  'svg',
  {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  },
  h('path', { d: 'M4 20h4L19 9a2.83 2.83 0 0 0-4-4L4 16v4z' }),
  h('path', { d: 'M13.5 6.5l4 4' })
);

class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = headerState();
  }
  componentDidMount() {
    this.unlisten = FocusedPerspectiveStore.listen(() => this.setState(headerState()));
  }
  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }
  render() {
    return h(
      'header',
      { className: 'list-header' },
      h(
        'div',
        { className: 'list-header-titles' },
        h('h1', null, this.state.title),
        this.state.subtitle && h('div', { className: 'list-header-subtitle' }, this.state.subtitle)
      ),
      h(
        'button',
        {
          className: 'list-header-button',
          title: localized('Compose new message'),
          'aria-label': localized('Compose new message'),
          onClick: () => Actions.composeNewBlankDraft(),
        },
        PENCIL
      )
    );
  }
}
ListHeader.displayName = 'ListHeader';

function activate() {
  ComponentRegistry.register(ListHeader, {
    locations: [WorkspaceStore.Location.ThreadList, WorkspaceStore.Location.DraftList],
    modes: ['split', 'list'],
  });
}

function deactivate() {
  ComponentRegistry.unregister(ListHeader);
}

module.exports = { activate, deactivate, serialize() {} };
