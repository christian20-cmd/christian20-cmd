# Règles de contribution et workflow Git

Pour garantir la qualité du projet, merci de respecter ces règles simples :

## Branches principales

- `main` : branche de production (ne pas pousser directement)
- `dev` : branche de développement (ne pas pousser directement)

## Travail sur le projet

- Toujours créer une branche **à partir de `dev`** pour vos modifications, par exemple :

  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feature/ma-fonctionnalite
