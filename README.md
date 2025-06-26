# Profile Modal

A React application with Tailwind CSS and shadcn/ui components that displays a participant information modal matching the provided design.

## Features

- **Participant Information Display**: Complete profile with photo, personal details, and contact information
- **French Flag Integration**: Visual country indicator
- **Payment Tracking**: Displays payment history with amounts, dates, and methods
- **Status Indicators**: Shows participant status (SUPPRIMÉ/ACTIVE)
- **Trainer Remarks Section**: Comments and feedback from trainers
- **Responsive Design**: Works on different screen sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Installation

### Windows (using the batch file)
```bash
# Double-click the install.bat file or run in command prompt:
install.bat
```

### Manual Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Alternative Package Managers
```bash
# Using yarn
yarn install
yarn dev

# Using pnpm
pnpm install
pnpm dev
```

## Usage

1. Start the development server with `npm run dev`
2. Open your browser to `http://localhost:5173`
3. Click the "Open Participant Modal" button to view the modal
4. The modal displays all participant information as shown in the design

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── dialog.tsx
│   │   ├── button.tsx
│   │   └── badge.tsx
│   └── ParticipantModal.tsx  # Main modal component
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application
├── main.tsx            # Entry point
└── globals.css         # Global styles with Tailwind CSS
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - UI component library
- **Radix UI** - Accessible component primitives
- **Vite** - Build tool and development server
- **Lucide React** - Icon library

## Customization

To customize the participant data, edit the `sampleParticipant` object in `src/App.tsx`:

```typescript
const sampleParticipant = {
  name: "Your Participant Name",
  birthDate: "DD/MM/YYYY",
  // ... other properties
};
```

## License

This project is for demonstration purposes.