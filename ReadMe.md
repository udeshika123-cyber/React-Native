# StyleApp

StyleApp is a React Native application built with Expo, featuring user authentication, a reading list, and themed UI components. It uses Appwrite as a backend for authentication and data storage.

## Features

- **User Authentication:** Register, login, and logout functionality using Appwrite.
- **Reading List:** Add, view, and delete books from your personal reading list.
- **Themed UI:** Light and dark mode support with custom themed components.
- **Navigation:** Tab and stack navigation using Expo Router.
- **Responsive Design:** Uses safe area insets and adaptive layouts.

## Project Structure

```
.
├── app/
│   ├── _layout.jsx
│   ├── about.jsx
│   ├── contact.jsx
│   ├── index.jsx
│   ├── (auth)/
│   │   ├── _layout.jsx
│   │   ├── login.jsx
│   │   └── reg.jsx
│   └── (dashboard)/
│       ├── _layout.jsx
│       ├── books.jsx
│       ├── create.jsx
│       ├── profile.jsx
│       └── books/[id].jsx
├── assets/
│   ├── adaptive-icon.png
│   ├── castale.jpg
│   ├── favicon.png
│   ├── icon.png
│   ├── splash-icon.png
│   └── img/
├── components/
│   ├── Spacer.jsx
│   ├── ThemedButton.jsx
│   ├── ThemedCard.jsx
│   ├── ThemedLoader.jsx
│   ├── ThemedLogo.jsx
│   ├── ThemedText.jsx
│   ├── ThemedTextInput.jsx
│   ├── ThemedView.jsx
│   └── auth/
│       ├── GuestOnly.jsx
│       └── UserOnly.jsx
├── constants/
│   └── Colors.js
├── contexts/
│   ├── BooksContext.jsx
│   └── UserContext.jsx
├── hooks/
│   ├── useBooks.js
│   └── useUser.js
├── lib/
│   └── appwrite.js
├── package.json
├── app.json
├── .gitignore
└── .txt
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Appwrite Project](https://appwrite.io/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd StyleApp
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure Appwrite:**

   - Update the endpoint, project ID, database ID, and collection ID in [`lib/appwrite.js`](lib/appwrite.js) as needed.

4. **Start the development server:**
   ```sh
   npm run start
   ```

### Running on Devices

- **Android:** `npm run android`
- **iOS:** `npm run ios`
- **Web:** `npm run web`

## Usage

- **Register:** Create a new account via the Register screen.
- **Login:** Access your account using your credentials.
- **Profile:** View your profile and logout.
- **Books:** Add, view, and delete books from your reading list.

## Key Files

- **Authentication Context:** [`contexts/UserContext.jsx`](contexts/UserContext.jsx)
- **Books Context:** [`contexts/BooksContext.jsx`](contexts/BooksContext.jsx)
- **Appwrite Integration:** [`lib/appwrite.js`](lib/appwrite.js)
- **Custom Hooks:** [`hooks/useUser.js`](hooks/useUser.js), [`hooks/useBooks.js`](hooks/useBooks.js)
- **Themed Components:** [`components/`](components/)

## Theming

The app supports both light and dark themes, defined in [`constants/Colors.js`](constants/Colors.js). Components automatically adapt to the current color scheme.

## License

This project is licensed under the MIT License.

---

_Built with ❤️ using React Native, Expo, and Appwrite._
