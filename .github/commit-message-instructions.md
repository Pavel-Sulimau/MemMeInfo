# Commit Message Instructions

## 🚨 Critical Format Rule

Always use this exact format:

`type: description`

Rules:
- 50 characters or fewer (entire title)
- Imperative mood (for example, `add` not `added`)
- No period at the end
- Single line only (no line breaks in title)

---

## ✅ Valid Types

| Type | When to Use |
|------|-------------|
| `feat:` | New feature or capability |
| `fix:` | Bug fix |
| `refactor:` | Code restructuring without behavior change |
| `test:` | Add or update tests |
| `docs:` | Documentation-only change |
| `chore:` | Build, dependencies, or tooling |
| `perf:` | Performance improvement |

---

## ✅ Good Examples

- `feat: add user profile page`
- `fix: handle missing config file`
- `refactor: split navbar setup`
- `test: add auth service tests`
- `docs: update setup guide`
- `chore: bump dev dependencies`
- `perf: reduce image load time`

---

## ❌ Bad Examples

- `feat: Added profile page feature.` (past tense + period)
- `Fix crash` (missing type prefix)
- `feat: add groups\ntest: add tests` (multi-line title)
- `feat: implement a full dashboard with metrics and exports` (too long)

---

## 📋 Decision Tree

Question: does this commit touch multiple areas (for example, feature + tests + refactor)?

Preferred: split into separate commits.

- `feat: add profile edit form`
- `test: add profile form tests`
- `refactor: extract form validation`

If it must stay one commit, choose the dominant type.

- `feat: add profile form with tests`

---

## ✅ Validation Checklist

Before committing, verify:

- [ ] Starts with a valid type (`feat:`, `fix:`, etc.)
- [ ] Type prefix is followed by a single space
- [ ] Uses imperative mood (`add`, not `added` or `adds`)
- [ ] 50 characters or fewer
- [ ] No period at the end
- [ ] Single line only
- [ ] Completes the sentence: “If applied, this commit will …”

---

## 💡 Pro Tips

- Keep commits atomic: one logical change per commit
- Be specific: `fix: prevent crash on empty title` is better than `fix: bug`
- No body needed unless critical context is required
- Quick self-test: “If applied, this commit will add profile form”
