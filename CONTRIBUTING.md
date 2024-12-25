# Contributing Guidelines

Thank you for considering contributing to the Educational Resources Directory! This document outlines the process for contributing resources and code changes.

## Adding Resources

### Resource Format

Resources should be added as Markdown files in the `src/content/resources` directory using the following format:

```yaml
---
title: "Resource Name"
url: "https://example.com"
type: "tutorial|video|ebook|tool"
topics: ["javascript", "react"]
difficulty: "beginner|intermediate|advanced"
cost: "free|paid|freemium"
lastVerified: "2024-01-20"
---

Brief description of the resource and what makes it valuable for learners.
```

### Resource Validation Criteria

- All resources must be active and accessible
- Content must be high-quality and relevant
- Resources should be categorized accurately
- Proper metadata must be included

## Code Contributions

### Code Style Guide

- Use TypeScript for type safety
- Follow the Astro coding conventions
- Use meaningful variable and function names
- Include JSDoc comments for functions
- Keep components focused and reusable

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure code quality
5. Submit a pull request with a clear description

### Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```
