# 🚀 Quick Dev Guide

## 📋 Architecture

- **`main`** → Production (ne pas toucher)
- **`release/X.X`** → Préparation versions (ne pas toucher)
- **`dev`** → Intégration
- **`feature/*`** → Ton code

**Règle :** Toujours partir de `dev`, jamais de `main` ou `release`.

---

## 🔄 Workflow

```
feature/xxx ──> dev ──> release/X.X ──> main (PROD)
```

### 1. Coder une feature

```bash
git checkout dev && git pull
git checkout -b feature/ma-feature
# ... code ...
git add . && git commit -m "feat: ma feature"
git push -u origin feature/ma-feature
gh pr create --base dev
# CI légère : lint + build (~2 min)
```

### 2. Release (quand dev est stable)

```bash
git checkout dev && git pull
git checkout -b release/X.X
git push -u origin release/X.X
gh pr create --base release/X.X --head dev
# CI modérée (2-3 min)
gh pr merge
```

### 3. Production

```bash
gh pr create --base main --head release/X.X
# CI STRICTE (5-7 min) → 0 warning, 0 vuln
gh pr merge

# Sync dev
git checkout dev && git merge main && git push
```

---

## 🆘 Fix rapides

**npm audit bloqué :**
```bash
npm audit fix
npm audit fix --force  # si nécessaire
```

**ESLint warnings :**
```bash
npm run lint -- --fix
```

**Secrets détectés :**
```bash
git rm --cached fichier-sensible
# RÉVOQUER le secret immédiatement !
```

**Garder ta branche à jour :**
```bash
git fetch origin && git rebase origin/dev
```

---

## 📊 Seuils CI

| Gate | Checks | npm audit | Warnings | Temps |
|------|--------|-----------|----------|-------|
| feature → dev | lint + build | - | OK | ~2 min |
| dev → release | lint + build | Modéré | OK | 2-3 min |
| release → main | 5 jobs | **0 vuln** | **0 toléré** | 5-7 min |

---

## 📞 Commandes essentielles

```bash
# Tester localement
npm run lint && npm run build && npm audit

# Auto-fix
npm run lint -- --fix && npm audit fix

# Créer une PR
gh pr create --base dev        # feature → dev
gh pr create --base release/X.X --head dev  # dev → release
gh pr create --base main --head release/X.X  # release → prod
```

---

**🎉 C'est tout !**
