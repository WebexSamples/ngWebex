# NgWebex - Angular Webex SDK Integration

A comprehensive Angular application demonstrating integration with the Webex JavaScript SDK for building modern web-based collaboration applications. This project showcases how to implement Webex Meetings functionality within an Angular framework using TypeScript.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## 🎯 Features

- **Webex SDK Integration**: Complete integration with the official Webex JavaScript SDK
- **Meeting Management**: Create, register, and sync Webex meetings
- **User Authentication**: Token-based authentication with Webex APIs
- **Real-time Status**: Live updates on registration and sync status
- **Angular Best Practices**: Modern Angular architecture with components and services
- **TypeScript Support**: Full TypeScript implementation for type safety

## 📁 Project Structure

```
ngWebex/
├── src/
│   ├── app/
│   │   ├── webex/                    # Webex component
│   │   │   ├── webex.component.ts    # Main Webex functionality
│   │   │   ├── webex.component.html  # UI template
│   │   │   ├── webex.component.css   # Component styles
│   │   │   └── webex.component.spec.ts # Unit tests
│   │   ├── app.component.ts          # Root component
│   │   ├── app.component.html        # Root template
│   │   └── app.module.ts             # Main app module
│   ├── environments/                 # Environment configurations
│   ├── assets/                       # Static assets
│   └── index.html                    # Main HTML file
├── e2e/                              # End-to-end tests
├── angular.json                      # Angular CLI configuration
├── package.json                      # Node.js dependencies
├── webpack.config.ts                 # Custom webpack configuration
└── README.md                         # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Angular CLI** (v9 or higher)
- **Webex Developer Account** and access token

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/WebexSamples/ngWebex.git
   cd ngWebex
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   ng serve
   ```

4. **Open in browser**:
   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🔧 Configuration

### Webex Access Token

To use the application, you'll need a Webex access token:

1. **Get a Personal Access Token**:
   - Visit [Webex Developer Portal](https://developer.webex.com/)
   - Sign in with your Webex account
   - Navigate to "Getting Started" → "Your Personal Access Token"

2. **For Production**: Create a Webex Integration:
   - Go to "My Apps" → "Create a New App" → "Integration"
   - Configure your integration settings
   - Use the generated access token

### Environment Configuration

You can configure environment-specific settings in:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

## 💻 Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🔨 Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 🏗️ Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## 🧪 Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 🔍 Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## 📋 Application Features

### Webex SDK Initialization

The application demonstrates how to initialize the Webex SDK with proper configuration:

```typescript
this.webex = Webex.init({
  config: {
    meetings: {
      deviceType: 'WEB'
    }
  },
  credentials: {
    access_token: this.token
  }
});
```

### User Authentication

**Get User Information**:
```typescript
async onGetMe() {
  const response = await this.webex.people.get('me');
  // User information available in response
}
```

### Meeting Registration

**Register for Meetings**:
```typescript
async onRegister() {
  try {
    await this.webex.meetings.register();
    this.registered = true;
  } catch (error) {
    window.alert(error);
  }
}
```

**Unregister from Meetings**:
```typescript
async onUnregister() {
  try {
    await this.webex.meetings.unregister();
    this.registered = false;
  } catch (error) {
    console.error(error);
  }
}
```

### Meeting Synchronization

**Sync Meetings**:
```typescript
async onSyncMeetings() {
  try {
    this.syncStatus = 'SYNCING';
    await this.webex.meetings.syncMeetings();
    this.syncStatus = 'SYNCED';
  } catch (error) {
    this.syncStatus = 'ERROR';
    console.error(error);
  }
}
```

### Meeting Creation

**Create New Meeting**:
```typescript
async onCreateMeeting(destination) {
  try {
    this.currentMeeting = await this.webex.meetings.create(destination);
  } catch (error) {
    console.error(error);
  }
}
```

## 🎨 User Interface

The application provides a clean, functional interface with:

### Main Components

1. **Token Input**: Enter your Webex access token
2. **SDK Status**: Shows whether Webex instance is created
3. **User Info**: Get current user details
4. **Meeting Controls**: Register, unregister, and sync meetings
5. **Meeting Creation**: Create new meetings with destination
6. **Status Display**: Real-time status updates

### UI Elements

- **Input Field**: Token entry with two-way data binding
- **Action Buttons**: Trigger various Webex operations
- **Status Indicators**: Visual feedback for operations
- **Meeting Display**: Shows current meeting information

## 🔧 Technical Implementation

### Angular Architecture

**Component Structure**:
- `AppComponent`: Root component that hosts the Webex component
- `WebexComponent`: Main component handling all Webex functionality

**Key Features**:
- **Two-way Data Binding**: Using `[(ngModel)]` for form inputs
- **Event Handling**: Click handlers for all button actions
- **Async Operations**: Proper handling of async/await patterns
- **Error Handling**: Try-catch blocks for API calls

### Webex SDK Integration

**Dependencies**:
```json
{
  "webex": "^1.80.147"
}
```

**Import Statement**:
```typescript
import Webex from 'webex';
```

### Custom Webpack Configuration

The project includes custom webpack configuration for Node.js compatibility:

```typescript
export default {
  node: {
    fs: 'empty'
  }
} as webpack.Configuration;
```

This configuration resolves Node.js filesystem issues in the browser environment.

## 📦 Dependencies

### Core Dependencies

```json
{
  "@angular/animations": "~9.0.3",
  "@angular/common": "~9.0.3",
  "@angular/compiler": "~9.0.3",
  "@angular/core": "~9.0.3",
  "@angular/forms": "~9.0.3",
  "@angular/platform-browser": "~9.0.3",
  "@angular/platform-browser-dynamic": "~9.0.3",
  "@angular/router": "~9.0.3",
  "rxjs": "~6.5.4",
  "tslib": "^1.10.0",
  "webex": "^1.80.147",
  "zone.js": "~0.10.2"
}
```

### Development Dependencies

```json
{
  "@angular-builders/custom-webpack": "^9.0.0",
  "@angular-devkit/build-angular": "~0.900.4",
  "@angular/cli": "~9.0.4",
  "@angular/compiler-cli": "~9.0.3",
  "@angular/language-service": "~9.0.3",
  "typescript": "~3.7.5"
}
```

## 🧪 Testing

### Unit Testing

Run unit tests with:
```bash
ng test
```

**Test Configuration**:
- **Framework**: Jasmine
- **Runner**: Karma
- **Coverage**: Istanbul

### End-to-End Testing

Run e2e tests with:
```bash
ng e2e
```

**E2E Configuration**:
- **Framework**: Protractor
- **Browser**: Chrome (headless available)

### Component Testing

The `WebexComponent` includes comprehensive unit tests:
- Component initialization
- SDK integration
- Meeting operations
- Error handling

## 🚀 Deployment

### Development Build

```bash
ng build
```

### Production Build

```bash
ng build --prod
```

**Production Optimizations**:
- **Minification**: Code minification enabled
- **Tree Shaking**: Dead code elimination
- **Ahead-of-Time Compilation**: AOT compilation
- **Service Worker**: PWA support (if configured)

### Deployment Options

1. **Static Hosting**: Deploy `dist/` folder to any static host
2. **CDN**: Use CDN for global distribution
3. **Docker**: Containerize with nginx
4. **Cloud Platforms**: Deploy to AWS, Azure, GCP

## 🔧 Scripts

Available npm scripts:

```json
{
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
}
```

### Usage Examples

```bash
# Development server
npm start

# Production build
npm run build

# Run tests
npm test

# Lint code
npm run lint

# E2E tests
npm run e2e
```

## 🔍 Debugging

### Development Tools

**Browser DevTools**:
- Network tab for API calls
- Console for debugging output
- Application tab for storage inspection

**Angular DevTools**:
- Component inspection
- Change detection profiling
- Performance analysis

### Debug Configuration

The component includes debug statements:
```typescript
async onGetMe() {
  const response = await this.webex.people.get('me');
  debugger; // Debug breakpoint
}
```

## 🔐 Security Considerations

### Token Management

**Development**:
- Use personal access tokens for testing
- Never commit tokens to version control
- Store tokens securely in environment variables

**Production**:
- Implement proper OAuth flow
- Use refresh tokens for long-term sessions
- Implement token rotation

### Best Practices

1. **Environment Variables**: Store sensitive data in environment files
2. **HTTPS**: Always use HTTPS in production
3. **CSP**: Implement Content Security Policy
4. **Token Validation**: Validate tokens before use

## 📈 Performance Optimization

### Angular Optimizations

1. **OnPush Change Detection**: Implement for better performance
2. **Lazy Loading**: Load modules on demand
3. **Tree Shaking**: Remove unused code
4. **Service Workers**: Cache resources

### Webex SDK Optimizations

1. **Selective Imports**: Import only needed SDK modules
2. **Connection Pooling**: Reuse connections
3. **Error Handling**: Implement proper error boundaries
4. **Memory Management**: Clean up resources

## 🤝 Contributing

### Development Guidelines

1. **Code Style**: Follow Angular style guide
2. **Testing**: Write unit tests for new features
3. **Documentation**: Update README for new features
4. **TypeScript**: Use strict typing

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Implement changes with tests
4. Run linting and tests
5. Submit pull request

## 📚 Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 🔗 Additional Resources

- [Webex Developer Portal](https://developer.webex.com/)
- [Webex JavaScript SDK Documentation](https://developer.webex.com/docs/sdks/browser)
- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Webex API Reference](https://developer.webex.com/docs/api/getting-started)

## 🆘 Support

- Create an issue in this repository
- Review [Webex SDK Documentation](https://developer.webex.com/docs/sdks/browser)
- Contact [Webex Developer Support](https://developer.webex.com/support)

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

---

**Repository**: https://github.com/WebexSamples/ngWebex
