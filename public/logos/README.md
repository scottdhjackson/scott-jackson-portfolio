# Company Logos

Add your company logos to this directory.

## Instructions

1. Add your logo files here (SVG format recommended for best quality)
2. Name them clearly (e.g., `google.svg`, `microsoft.svg`)
3. Update the `COMPANIES` array in `/lib/constants.ts` with:
   - Company name
   - Logo path (e.g., `/logos/google.svg`)

## Recommended Format

- **File type**: SVG (preferred) or PNG
- **Size**: Approximately 120-200px wide
- **Color**: Logos will be displayed in grayscale by default, color on hover
- **Background**: Transparent

## Example

```typescript
{
  name: 'Google',
  logo: '/logos/google.svg',
}
```
