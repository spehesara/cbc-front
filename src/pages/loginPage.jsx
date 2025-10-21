import './loginPage.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login Page</h1>

        <label>Username:</label>
        <input type="text" name="username" />

        <label>Password:</label>
        <input type="password" name="password" />

        <button type="submit">Login</button>
      </div>
    </div>
  );
}
