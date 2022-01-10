# Maintainers

## Releasing new version

```bash
# Checkout main branch andensure it's up to date with remote
git checkout main
git pull --rebase

# Bump version
npx standard-version

# Push branch and tag to remote
git push --follow-tags
```
