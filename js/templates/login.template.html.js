const formTemplate =
`<h1>Login :</h1>
<form id="login-form" action="#" method="post">
	<label for="mail">mail :</label>
	<input id="mail" type="text">
	<label for="password">password :</label>
	<input id="password" type="password">
	<button id="submit" type="submit">Login</button>
</form>`;

const loggedInTemplate =
`
<p>your logged in as : <%= name %></p>
<a href="#pos">Launch POS</a>
`;

export {formTemplate, loggedInTemplate};