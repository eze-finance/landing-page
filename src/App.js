import React, { Suspense, Fragment } from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { routes } from "src/routes";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import PageLoading from "src/component/PageLoading";
import AuthGuard from "src/component/AuthGuard";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "src/theme";
// import AnimatedCursor from "react-animated-cursor"
const history = createBrowserHistory();

function App() {
	const theme = createTheme();
	console.log(theme);
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					{/* <Router history={history}> */}
					<HashRouter>
						<RenderRoutes data={routes} />
					</HashRouter>
				</MuiPickersUtilsProvider>
				{/* <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={1.3}
        outerScale={5}
        
         /> */}
			</ThemeProvider>
		</div>
	);
}

export default App;

function RenderRoutes(props) {
	return (
		<Suspense fallback={<PageLoading />}>
			<Switch>
				{props.data.map((route, i) => {
					const Component = route.component;

					const Layout = route.layout || Fragment;
					return (
						<Route
							exact={route.exact}
							key={i}
							path={route.path}
							render={(props) => (
								<Layout {...props}>
									{route.routes ? (
										<RenderRoutes data={route.routes} />
									) : (
										<Component {...props} />
									)}
								</Layout>
							)}
						/>
					);
				})}
			</Switch>
		</Suspense>
	);
}
