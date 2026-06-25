# Products — Super Rick Standards version registry

`products.json` is the **version track**: every product that wears the Super Rick identity, and the
standards version it currently pins. One file answers *"which Super Rick Standards is product X on?"*

## Adopt / bump a product

1. Read the repo-root `VERSION` (the latest standards release) and `standards/`.
2. Implement (or update) the product surface to that standard.
3. Edit this product's row in `products.json`:
   - set `pinned_standards_version` to the version you implemented,
   - update `notes` if the relationship changed.
4. Commit. A product stays on its pinned version until its row changes — so the registry never lies
   about what a product actually implements.

## Add a new product

Append a row:

```json
{
  "id": "<product-id>",
  "surface": "<one-line description>",
  "repo": "marvelousempire/<repo>",
  "role": "reference-implementation | consumer",
  "pinned_standards_version": "<semver>",
  "notes": "<optional>"
}
```

## Roles

| Role | Meaning |
|------|---------|
| `reference-implementation` | The product the standard is extracted *from* (currently `super-rick-presence`). When it changes, the standard is updated in the same pass. |
| `consumer` | A product that *follows* the standard (and may pin an older version until it adopts a newer one). |
