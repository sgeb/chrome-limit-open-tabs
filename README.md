# chrome-limit-open-tabs

A Chrome extension helping compulsive tab openers by limiting the number of tabs they can open.

Currently this extension only counts the number of open tabs and displays it as a badge in the icon bar.

## TODO / Feature backlog
- disallow Chrome from opening tabs when limit reached
- options screen to customize the limit of open tabs
- option to count pinned tabs, default is to ignore them
- option to count per window or across browser session
- soft limit: don't strictly disallow tab opening, support for tab bursts but warn/alert after a given time (e.g. 5 mins)
- change icon color depending on number of open tabs (closer to limit => red)
