import React, { useState, useRef } from "react";
import {
	Grid,
	Box,
	Container,
	Typography,
	TextField,
	makeStyles,
	Button,
} from "@material-ui/core";
import Page from "src/component/Page";
import TopBar from "src/layouts/HomeLayout/TopBar";
import { toast } from "react-toastify";
import { init, send } from "emailjs-com";
init("user_gk3rZzAMzBdxrIjiIlBge");

const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		padding: "80px 0px 120px",
		overflow: "hidden",
		marginTop: "30px",
		zIndex: " 1",
		[theme.breakpoints.down("sm")]: {
			padding: "30px 0px 50px",
			marginTop: "20px",
		},
	},
	innerData: {
		position: "relative",
		textAlign: "center",
		"& h2": {
			fontSize: "18px",
			fontWeight: "600",
			color: theme.palette.secondary.main,
			lineHeight: "25px",
			[theme.breakpoints.down("md")]: {
				fontSize: "24px",
				lineHeight: "30px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "17px",
				lineHeight: "25px",
			},
		},
		"& h4": {
			fontSize: "40px",
			color: theme.palette.primary.main,
			lineHeight: "50px",
			fontWeight: 700,
			marginTop: "15px",
			[theme.breakpoints.down("md")]: {
				fontSize: "26px",
				lineHeight: "30px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "17px",
				lineHeight: "25px",
			},
		},
	},
	counter: {
		padding: "65px 0",
		position: "relative",
		padding: "65px 25px",
		overflow: "hidden",
		borderRadius: "16px",
		border: "2px solid rgba(39, 36, 42, 0.47)",
		position: "relative",
		background: " rgb(36,14,37)",
		background: "linear-gradient(rgba(0, 0, 0, 0.13) 0%, #1e0820 100%)",
		"& figure": {
			height: "110px",
			[theme.breakpoints.down("xs")]: {
				height: "60px",
				"& img": {
					height: "50px",
				},
			},
		},

		"& p": {
			fontSize: "21px",
			fontWeight: "500",
			marginBottom: "15px",
			color: theme.palette.primary.dark,
			lineHeight: "23px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "14px",
				lineHeight: "20px",
			},
		},
	},

	totalValuesWrap: {
		position: " absolute",
		top: "-1px",
		right: "-1px",
		bottom: "-1px",
		left: "-1px",
		zIndex: "-1",
		width: "100%",
	},
	DataBox: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	lineBox: {
		position: "relative",
		width: "20px",
		minWidth: "20px",
		margin: "-100px",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			height: "40px",
			minWidth: "100%",
			margin: "auto",
		},
		"&::before": {
			content: '" "',
			position: "absolute",
			left: "50%",
			transform: "translateX(-50%)",
			height: "60px",
			opacity: "1",
			top: "-20px",
			width: "1px",
			background: "#482340",
			[theme.breakpoints.down("xs")]: {
				height: "20px",
				top: "0px",
			},
		},
	},
	roundDots: {
		position: "absolute",
		top: "50px",
		left: "0",
	},
	roundDots1: {
		position: "absolute",
		top: "230px",
		right: "0",
	},
	TopHeader: {
		background: "linear-gradient(rgba(0, 0, 0, 0.13) 0%, #1e0820 100%)",
		padding: "200px 0 100px",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			padding: "160px 0 60px",
		},
		"& h2": {
			fontSize: "54px",
			fontWeight: "700",
			color: theme.palette.primary.main,
			lineHeight: "62px",
			[theme.breakpoints.down("md")]: {
				fontSize: "44px",
				lineHeight: "50px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "37px",
				lineHeight: "42px",
			},
		},
		"& h4": {
			fontSize: "17px",
			color: theme.palette.primary.main,
			lineHeight: "30px",
			fontWeight: 700,

			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				lineHeight: "22px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "14px",
				lineHeight: "23px",
			},
		},
	},
	formData: {
		maxWidth: "767px",
		margin: "0 auto",
		marginTop: "70px",
		[theme.breakpoints.down("xs")]: {
			marginTop: "60px",
		},
	},
	disabledButton: {
		backgroundColor: "#efc437 !important",
	},
	linkColor: {
		color: "#efc437",
	},
}));

export default function PrivacyPolicy(props) {
	const classes = useStyles();
	const { disabledButton } = classes;

	return (
		<Page title="Contact Us">
			<TopBar />
			<Box className={`${classes.TopHeader} wow bounceInUp`}>
				<Typography variant="h2">EZE Privacy Policy</Typography>
				<Typography variant="h4">Home / Privacy</Typography>
			</Box>
			<Box
				className={`${classes.bannerBox} wow bounceInUp`}
				data-wow-duration="0.5s"
				data-wow-delay="0.5s"
			>
				<img
					src="/images/home2/dots.svg"
					className={classes.roundDots}
					alt=""
				/>
				<img
					src="/images/home2/dots.svg"
					className={classes.roundDots1}
					alt=""
				/>
				<Container
					maxWidth="md"
					style={{ position: "ralative", color: "white" }}
				>
					{/* <Box className={classes.counter}> */}
					{/* <Box
							className={`${classes.innerData} wow slideInRight`}
							data-wow-duration="0.1s"
							data-wow-delay="0.1s"
						> */}
					{/* <Typography variant="h2">EZE Technologies</Typography> */}

					<Typography variant="h5">
						<Box sx={{ fontStyle: "oblique", fontWeight: "bold", m: 1 }}>
							(EZE Self Custody Digital Assets.)
						</Box>
					</Typography>

					<Typography variant="h4">
						<Box sx={{ fontWeight: "bold", m: 1, mb: 6, fontSize: 14 }}>
							Last Updated: August 31, 2021
						</Box>
					</Typography>

					<Typography variant="p">
						<Box>
							<h2>Introduction</h2>
							<p>
								EZE is a software service accessible via a mobile device
								application and a browser service for the Ethereum Network (the
								&quot;Network&quot;) distributed by (&quot;EZE
								&lsquo;&rsquo;SCDA&rsquo;&rsquo;&quot; or &quot;we&quot; or
								&quot;us&quot; or &quot;our&quot;) that enables users to (i)
								self custody digital assets; (ii) access a digital asset browser
								and link to decentralized applications and decentralized
								exchanges; (iii) view addresses and information that are part of
								digital asset networks and broadcast transactions; and (iv)
								additional functionality as EZE may add to the app from time to
								time (collectively, the &quot;App&quot; or &quot;EZE&quot;).
								This Privacy Policy (&quot;Privacy Policy&quot;) helps explain
								how we collect, use, store, and protect your information when
								you use the App, our developer software, or our website at&nbsp;
								<a
									href="https://wallet.coinbase.com/"
									className={classes.linkColor}
								>
									https://eze.finance
								</a>{" "}
								(collectively the &quot;Services&quot;). Please also read
								<a
									href="https://wallet.coinbase.com/terms-of-service"
									className={classes.linkColor}
								>
									&nbsp;Terms of Service
								</a>{" "}
								(the &ldquo;Terms&rdquo;), which describe the terms under which
								you use the Services.
							</p>
							<p>
								<br />
							</p>
							<strong>Contents</strong>
							<ol>
								<li>
									<p>The data we collect about you</p>
								</li>
								<li>
									<p>How is your personal data collected?</p>
								</li>
								<li>
									<p>Purposes for which we will use your personal data</p>
								</li>
								<li>
									<p>How we use your personal data</p>
								</li>
								<li>
									<p>How we share information with third parties</p>
								</li>
								<li>
									<p>How your information is shared with other EZE users</p>
								</li>
								<li>
									<p>Personal Data Retention</p>
								</li>
								<li>
									<p>Disclosures of your personal data</p>
								</li>
								<li>
									<p>Data security</p>
								</li>
								<li>
									<p>EU Residents</p>
								</li>
								<li>
									<p>Our Global Operations</p>
								</li>
								<li>
									<p>Glossary</p>
								</li>
								<li>
									<p>Your legal rights</p>
								</li>
								<li>
									<p>Legal Rights Explained</p>
								</li>
								<li>
									<p>Updates To Our Policy</p>
								</li>
								<li>
									<p>Contact Us</p>
								</li>
							</ol>
							<p>
								<br />
							</p>
							<p>
								<br />
							</p>
							<h2>1. The data we collect about you</h2>
							<p>
								We receive or collect information when we operate and provide
								our Services, including when you install, access, or use our
								Services.
							</p>
							<p>Information you provide</p>
							<ul>
								<li>
									<p>
										Your Account Information&nbsp;- In order to create an EZE,
										you will provide us with a username. You may also
										voluntarily add other information, such as a username.
										<br />
										<br />
									</p>
								</li>
								<li>
									<p>
										Your Transactions&nbsp;- Your Network private key, which you
										utilize to access your funds and initiate transactions, is
										stored only on your own device. However, to facilitate your
										transactions and provide you with your account balance, we
										store the Network public key address associated with your
										Network private key.
										<br />
										<br />
									</p>
								</li>
								<li>
									<p>
										Customer Support&nbsp;- We may collect additional
										information you may disclose to our customer support team.
									</p>
								</li>
							</ul>
							<p>Information we collect from our affiliates</p>
							<p>
								Our &quot;family of companies&quot; is the group of companies
								related to us by common control or ownership
								(&quot;Affiliates&quot;). In accordance with applicable law, we
								may obtain information about you from our Affiliates as a normal
								part of conducting business with you, such as when you link your
								EZE. account to any other Wallet account, so that we may offer
								our Affiliates&apos; Services to you (e.g., convert
								cryptocurrency into fiat and make withdrawals into your bank
								account).
							</p>
							<p>Automatically collected information</p>
							<ul>
								<li>
									<p>
										Metrics and Performance Data&nbsp;- We may collect
										service-related, diagnostic, and performance information.
										This includes high level information about your activity
										(such as how you use our Services and how you interact with
										others using our Services), and diagnostic, crash, website,
										and performance logs and reports.
										<br />
										<br />
									</p>
								</li>
								<li>
									<p>
										Device and Connection Information&nbsp;- We may collect
										device-specific information when you install, access, or use
										our Services. This may include your IP address and, if you
										choose to allow push notifications through EZE account, your
										device&apos;s unique push token. We may also temporarily
										collect information about decentralized applications (dapps)
										that you are connecting to, while establishing that
										connection.
										<br />
										<br />
									</p>
								</li>
								<li>
									<p>
										Status Information&nbsp;- We may collect information about
										your online status on our Services, such as when you last
										used our Services (your &quot;last seen status&quot;) etc.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<h2>2. How is your personal data collected?</h2>
							<p>
								We use different methods to collect data from and about you
								including through:
							</p>
							<p>
								Direct interactions. You may give us
								your&nbsp;Identity&nbsp;and&nbsp;Contact Data&nbsp;by filling in
								forms, providing a visual image of yourself via the Service, by
								email or otherwise. This includes personal data you provide when
								you:
							</p>
							<ul>
								<li>
									<p>visit our Site or Applications;</p>
								</li>
								<li>
									<p>apply for our products or services;</p>
								</li>
								<li>
									<p>create an account;</p>
								</li>
								<li>
									<p>subscribe to our services or publications;</p>
								</li>
								<li>
									<p>make use of any of our Services;</p>
								</li>
								<li>
									<p>request marketing to be sent to you;</p>
								</li>
								<li>
									<p>enter a competition, promotion or survey;</p>
								</li>
								<li>
									<p>give us feedback or contact us.</p>
								</li>
							</ul>
							<p>
								Automated technologies or interactions.&nbsp;As you interact
								with us via our Site or Applications, we will automatically
								collect&nbsp;Technical Data&nbsp;about your equipment, browsing
								actions and patterns. We collect this personal data by using
								cookies, server logs and other similar technologies. We will
								also collect&nbsp;Transactional Data. We may also
								receive&nbsp;Technical Data&nbsp;about you if you visit other
								websites employing our cookies. On our main website you will be
								informed about how we use cookies through the&nbsp;Cookie
								Settings.
							</p>
							<p>
								Third parties or publicly available sources.&nbsp;We also obtain
								information about you from third parties or publicly available
								sources (credit reference agencies, fraud and crime prevention
								agencies, public blockchain).
							</p>
							<p>&nbsp;</p>

							<h2>3. Purposes for which we will use your personal data</h2>
							<p>
								We have set out below, in a table format, a description of all
								the ways we plan to use your personal data, and which of the
								legal bases we rely on to do so. We have also identified what
								our legitimate interests are where appropriate.
							</p>
							<p>
								Note that we may process your personal data on more than one
								lawful ground depending on the specific purpose for which we are
								using your data. Please&nbsp;contact us&nbsp;if you need details
								about the specific legal ground, we are relying on to process
								your personal data where more than one ground has been set out
								in the table below.
							</p>
							<p>&nbsp;</p>
							<strong>Affiliate Sharing</strong>
							<p>
								Our EZE companies or affiliates: Our &quot;family of
								companies&quot; is the group of companies related to us by
								common control or ownership (&quot;Affiliates&quot;). We may
								share your information with our Affiliates EZE account, as part
								of the normal conduct of business and in order to offer products
								and services to you.
							</p>
							<strong>Marketing</strong>
							<p>
								We strive to provide you with choices regarding certain personal
								data uses, particularly around marketing and advertising.
							</p>
							<strong>Promotional offers from us</strong>
							<p>
								We may use
								your&nbsp;Identity,&nbsp;Contact,&nbsp;Technical,&nbsp;Transactional,&nbsp;Usage&nbsp;and&nbsp;Profile
								Data&nbsp;to form a view on what we think you may want or need,
								or what may be of interest to you. This is how we decide which
								products, services and offers may be relevant for you (we call
								this marketing).
							</p>
							<p>
								You will receive marketing communications from us if you have
								requested information from us or purchased from us and you have
								not opted out of receiving that marketing.
							</p>
							<strong>Third-party marketing</strong>
							<p>
								We will get your express opt-in consent before we share your
								personal data with any third party for direct marketing
								purposes.
							</p>
							<strong>Opting out</strong>
							<p>
								You can ask us or third parties to stop sending you marketing
								messages at any time by following the opt-out links on any
								marketing message sent to you.
							</p>
							<p>
								Further, you can let us know directly that you prefer not to
								receive any marketing messages by
								emailing&nbsp;privacy@eze.finance
							</p>
							<p>
								Where you opt out of receiving these marketing messages, this
								will not apply to personal data provided to us as a result of a
								product/service purchase, warranty registration, product/service
								experience or other transactions.
							</p>
							<strong>Cookies</strong>
							<p>
								When you access our Services, we may place small data files
								called cookies or pixel tags on your computer or mobile device.
							</p>
							<p>
								We use these files to understand, secure, operate, and provide
								our Services. For example, we use cookies to:
							</p>
							<ul>
								<li>
									<p>
										Provide all web-based Services, improve your experience, and
										understand how our Services are being used;
									</p>
								</li>
								<li>
									<p>Measure the effectiveness of our promotions; and</p>
								</li>
								<li>
									<p>
										Remember your choices and customize our Services for you
									</p>
								</li>
							</ul>
							<p>
								You can follow the instructions provided by your browser or
								device (usually located under &quot;Settings&quot; or
								&quot;Preferences&quot;) to modify your cookie or pixel data
								settings. Please note that if you set your browser or device to
								disable cookies, certain of our Services may not function
								properly.
							</p>

							<strong>Change of purpose</strong>
							<p>
								We will only use your personal data for the purposes for which
								we collected it, unless we reasonably consider that we need to
								use it for another reason and that reason is compatible with the
								original purpose. If you wish to get an explanation as to how
								the processing for the new purpose is compatible with the
								original purpose, please&nbsp;contact us.
							</p>
							<p>
								If we need to use your personal data for an unrelated purpose,
								we will notify you and we will explain the legal basis which
								allows us to do so.
							</p>

							<p>&nbsp;</p>
							<h2>4. How we use your personal data</h2>
							<p>
								We will only use your personal data when the DPL, the EU General
								Data Protection Regulation (GDPR) (if applicable) or the
								California Consumer Privacy Act (if applicable) allows us to.
								Most commonly, we will use your personal data in the following
								circumstances:
							</p>
							<ul>
								<li>
									<p>For the provision of the Services.</p>
								</li>
								<li>
									<p>Where we need to comply with a legal obligation.</p>
								</li>
								<li>
									<p>
										Where it is necessary for our legitimate interests (or those
										of a third party) and your interests and individual rights
										do not override those interests.
									</p>
								</li>
							</ul>
							<p>
								Please refer to the&nbsp;Glossary,&nbsp;lawful basis sections to
								find out more about the types of lawful bases that we will rely
								on to process your personal data.
							</p>
							<p>
								Generally, we do not rely on consent as a legal basis for
								processing your personal data although we will get your consent
								before sending third party direct marketing communications to
								you via email or text message. You have the right to withdraw
								consent to marketing at any time by contacting us. See below for
								further details on marketing.
							</p>
							<p>&nbsp;</p>
							<h2>5. How we share information with third parties</h2>
							<p>
								We work with third-party providers to help us operate, provide,
								improve, customize, support, and market our Services. For
								example, we work with companies to distribute our apps, provide
								our infrastructure, delivery, and other systems. These providers
								may provide us information about you in certain circumstances;
								for example, app stores may provide us reports to help us
								diagnose and fix service issues.
							</p>
							<p>
								We may also share information with law enforcement, government
								officials, or other third parties when:
							</p>
							<ul>
								<li>
									<p>
										We are compelled to do so by a subpoena, court order, or
										similar legal procedure; or
									</p>
								</li>
								<li>
									<p>
										We believe in good faith that the disclosure of personal
										information is necessary to prevent physical harm or
										financial loss, to report suspected illegal activity or to
										investigate violations of our Terms.
									</p>
								</li>
							</ul>
							<p>
								Finally, we may share information with companies or other
								entities that we plan to merge with or be acquired by. Should
								such a combination occur, we will require that the new combined
								entity follow this Privacy Policy with respect to your personal
								information. You will receive prior notice of any change in
								applicable policy.
							</p>
							<p>&nbsp;</p>
							<h2>6. How your information is shared with other EZE users</h2>
							<p>
								If you use your account to engage in a transaction with another
								user, that user will have access to your transaction
								information. Users with whom you interact with may store or
								re-share your information with others, on or off of our
								Services. We, however, will never store your transaction
								information.
							</p>
							<p>&nbsp;</p>
							<h2>7. Personal Data Retention</h2>
							<strong>How long will you use my personal data for?</strong>
							<p>
								The DPL does not dictate how long any personal data is required
								to be kept. To determine the appropriate retention period for
								personal data, we will consider the amount, nature and
								sensitivity of the personal data, the potential risk of harm
								from unauthorized use or disclosure of your personal data, the
								purposes for which we process your personal data and whether we
								can achieve those purposes through other means, and the
								applicable legal, regulatory, tax, accounting or other
								requirements.
							</p>
							<p>
								If we determine that we no longer need your personal data to
								fulfill the purposes we collected it for, we will either erase
								(delete) it or anonymize it.
							</p>
							<p>
								Here are some exemplary factors which we usually consider when
								determining how long we need to retain your personal data:
							</p>
							<ol>
								<li>
									<p>in the event of a complaint;</p>
								</li>
								<li>
									<p>
										if we reasonably believe there is a prospect of litigation
										in respect to our relationship with you or if we consider
										that we need to keep information to defend possible future
										legal claims;
									</p>
								</li>
								<li>
									<p>
										to comply with any applicable legal and/or regulatory
										requirements with respect to certain types of personal data
										(e.g. information needed for audit purposes etc); or
									</p>
								</li>
								<li>
									<p>
										in accordance with relevant industry standards or
										guidelines;
									</p>
								</li>
								<li>
									<p>
										in accordance with our legitimate business need to prevent
										abuse of the promotions that we launch. We will retain a
										customer&rsquo;s personal data for the time of the promotion
										in order to prevent the appearance of abusive behavior.
									</p>
								</li>
							</ol>
							<p>
								Please bear in mind that the&nbsp;right to
								deletion/erasure&nbsp;of your personal data&nbsp;is not
								absolute&nbsp;which means that in some circumstances, you can
								ask us to delete your data: see Section Your Legal Rights for
								further information. However, when interacting with any
								blockchain, we may not be able to ensure that your personal data
								is deleted. This is because blockchains are public decentralized
								networks and blockchain technology does not generally allow for
								data to be deleted and your right to erasure may not be able to
								be fully enforced. In these circumstances, we will only be able
								to ensure that all personal data that is held by us is
								permanently deleted.
							</p>
							<p>&nbsp;</p>
							<h2>8.&nbsp;Disclosures of your personal data</h2>
							<p>
								We may share your personal data with our third-party service
								providers, agents, subcontractors and other associated
								organizations, our group companies and Affiliates (as described
								below) in order to complete tasks and provide the Services to
								you on our behalf. When using third party service providers,
								they are required to respect the security of your personal data
								and to treat it in accordance with the law. We do not allow our
								third-party service providers to use your personal data for
								their own purposes and only permit them to process your personal
								data for specified purposes and in accordance with our
								instructions.
							</p>
							<p>We may pass your personal data to the following entities:</p>
							<ul>
								<li>
									<p>
										companies and organizations that assist us in processing,
										verifying or refunding transactions/orders you make and in
										providing any of the Services that you have requested;
									</p>
								</li>
								<li>
									<p>
										identity verification agencies to undertake required
										verification checks;
									</p>
								</li>
								<li>
									<p>
										fraud or crime prevention agencies to help fight against
										crimes including fraud, money-laundering and terrorist
										financing;
									</p>
								</li>
								<li>
									<p>
										organizations which assist us with customer service
										facilities;
									</p>
								</li>
								<li>
									<p>
										anyone to whom we lawfully transfer or may transfer our
										rights and duties under the relevant terms and conditions
										governing the use of any of the Services;
									</p>
								</li>
								<li>
									<p>
										any third party as a result of any restructure, sale or
										acquisition of our group or any Affiliates, provided that
										any recipient uses your information for the same purposes as
										it was originally supplied to us and/or used by us; and
									</p>
								</li>
								<li>
									<p>regulatory and law enforcement authorities.</p>
								</li>
							</ul>
							<p>
								Finally, we may share information with companies or other
								entities that we plan to merge with or be acquired by. Should
								such a combination occur, we will require that the new combined
								entity follow this Privacy Policy with respect to your personal
								information. You will receive prior notice of any change in
								applicable policy.
							</p>
							<p>&nbsp;</p>
							<h2>9. Data security</h2>
							<p>
								We have put in place appropriate security measures to prevent
								your personal data from being accidentally lost, used, damaged
								or accessed in an unauthorized or unlawful way, altered or
								disclosed. In addition, we limit access to your personal data to
								those employees, agents, contractors and other third parties who
								have a legitimate business need to know. They will only process
								your personal data on our instructions, and they are subject to
								a duty of confidentiality.
							</p>
							<p>
								Depending on the nature of the risks presented by the proposed
								processing of your personal data, we will have in place the
								following appropriate security measures:
							</p>
							<ol>
								<li>
									<p>
										organizational measures (including but not limited to staff
										training and policy development);
									</p>
								</li>
								<li>
									<p>
										technical measures (including but not limited to physical
										protection of data, pseudonymization and encryption); and
									</p>
								</li>
								<li>
									<p>
										securing ongoing availability, integrity and accessibility
										(including but not limited to ensuring appropriate back-ups
										of personal data are held).
									</p>
								</li>
							</ol>
							<p>
								We have put in place procedures to deal with any suspected
								personal data breach and will notify you and any relevant
								regulator of a breach where we are legally required to do so.
							</p>
							<p>
								If you want to know more about our security practice, please
								visit the following link:&nbsp;
								<a
									href="https://eze.finance/security"
									className={classes.linkColor}
								>
									https://eze.finance
								</a>
							</p>
							<p>&nbsp;</p>
							<h2>10. EU Residents</h2>
							<p>
								As an EU Resident the EU General Data Protection Regulation
								(GDPR) applies to you. In some sections throughout this Privacy
								Notice we encourage you to check this content as it provides you
								with certain specificities, please read it carefully.
							</p>
							<p>What is personal data</p>
							<p>
								Personal data, or personal information means any information
								about an individual from which that person can be identified. It
								does not include data where the identity has been removed
								(anonymous data). More information could be found here:&nbsp;
								<a
									href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/what-personal-data_en"
									className={classes.linkColor}
								>
									https://ec.europa.eu/info/law/law-topic/data-protection/reform/what-personal-data_en
								</a>
							</p>
							<p>
								Additional condition for processing of special categories of
								personal data
							</p>
							<p>
								Processing of your personal data is necessary for reasons of
								substantial public interest, on the basis of the EU Anti-Money
								Laundering Legislation as the Cayman Islands are subject to the
								Council Decision 2013/755/EU on the association of the overseas
								countries and territories with the European Union
								(&lsquo;Overseas Association Decision&rsquo;). Hence, we are
								required to process for instance information from your ID
								documents including a photographic picture of you.
							</p>
							<p>
								See also&nbsp;
								<a
									href="https://crypto.com/privacy/ncw#special-purpose"
									className={classes.linkColor}
								>
									row iv
								</a>{" "}
								in the table which describes the purposes for which we will use
								your personal data.
							</p>
							<p>Period for replying to a legitimate request</p>
							<p>
								The statutory period under GDPR for us to reply to a legitimate
								request is&nbsp;one month. That period may be extended by two
								further months where necessary, taking into account the
								complexity and number of the requests.
							</p>
							<p>Lodging a complaint with a data protection authority</p>
							<p>
								If you are an EU resident, you can also lodge a complaint with
								your local data protection authority. A detailed list is
								available here:
							</p>
							<p>
								<a
									href="https://edpb.europa.eu/about-edpb/board/members_en"
									className={classes.linkColor}
								>
									https://edpb.europa.eu/about-edpb/board/members_en
								</a>
							</p>
							<p>
								We would, however, appreciate the chance to deal with your
								concerns before you approach the relevant authority, so please
								feel free to contact us in the first instance.
							</p>
							<p>Retention period</p>
							<p>
								Under the EU Anti-Money Laundering legislation (Anti-Money
								Laundering Directives 4 and 5) we are obliged
								to&nbsp;retain&nbsp;your personal data&nbsp;for a period of 5
								years&nbsp;after the end of the relationship between us as a
								company and you as a customer.
							</p>
							<p>
								Another example relates to our legitimate business need to
								prevent abuse of the promotions that we launch. We will retain a
								customer&rsquo;s personal data for the time of the promotion in
								order to prevent the appearance of abusive behavior.
							</p>
							<p>International Transfers</p>
							<p>
								The delivery of our Services sometimes involves the transfer of
								your personal information out of EU countries. Laws in these
								countries may differ from the laws applicable to your country of
								residence. Where we transfer, store and process your data
								outside of the EU we have ensured that appropriate safeguards
								are in place to ensure an adequate level of data protection.
								This may be an adequacy decision of the European Commission
								confirming an adequate level of data protection in the
								respective non-EU country or an agreement on the basis of the EU
								Model Clauses (a set of clauses issued by the European
								Commission).
							</p>
							<p>
								Further information on these&nbsp;
								<a
									href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004D0915"
									className={classes.linkColor}
								>
									EU Model Clauses
								</a>{" "}
								(a.k.a Standard Contractual Clauses) and the rights they provide
								to data subjects can be found on the European Commission
								website.
							</p>
							<p>
								Please contact us if you require further information on the
								specific mechanism used by us when transferring your personal
								data outside of the EU.
							</p>
							<p>&nbsp;</p>
							<h2>11. Our Global Operations</h2>
							<p>
								You agree to our information practices, including the
								collection, use, processing, and sharing of your information as
								described in this Privacy Policy, as well as the transfer and
								processing of your information to the United States and other
								countries globally where we have or use facilities, service
								providers, or partners, regardless of where you use our
								Services.
							</p>
							<p>
								You acknowledge that the laws, regulations, and standards of the
								country in which your information is stored or processed may be
								different from those of your own country. However, we require
								our service providers to treat your information in strict
								confidence and use appropriate security measures to protect it.
								We also require them to uphold all obligations under this
								Privacy Policy.
							</p>
							<p>&nbsp;</p>
							<h2>12. Glossary</h2>
							<strong>Lawful Basis</strong>
							<p>
								<strong>Legitimate Interest</strong>&nbsp;means the interest of
								our business in conducting and managing our business to enable
								us to give you the best service/product and the best and most
								secure experience. We make sure we consider and balance any
								potential impact on you (both positive and negative) and your
								rights before we process your personal data for our legitimate
								interests. We do not use your personal data for activities where
								our interests are overridden by the impact on you (unless we
								have your consent or are otherwise required or permitted by
								law). You can obtain further information about how we assess our
								legitimate interests against any potential impact on you in
								respect of specific activities by contacting us.
							</p>
							<p>
								<strong>Performance of a Contract</strong>&nbsp;means processing
								your data where it is necessary for the performance of a
								contract to which you are a party or to take steps at your
								request before entering into such a contract.
							</p>
							<p>
								<strong>Comply with a legal obligation</strong>&nbsp;means
								processing your personal data where it is necessary for
								compliance with a legal obligation that we are subject to.
							</p>
							<strong>Site</strong>
							<p>
								&quot;Site&quot; means the relevant sections of the website
								under which EZE provides all or part of its Services:&nbsp;
								<a href="https://eze.finance" className={classes.linkColor}>
									https://eze.finance.
								</a>
							</p>
							<strong>Services</strong>
							<p>
								&quot;Services&quot; means the services provided by EZE through
								the Site, or through such other facilities provided by (or on
								behalf of) EZE.
							</p>
							<p>&nbsp;</p>
							<h2>13. Your legal rights</h2>
							<p>
								Under certain circumstances, you have rights under the data
								protection laws in relation to your personal data:
							</p>
							<ul>
								<li>
									<p>Right to be informed.</p>
								</li>
								<li>
									<p>Request access to your personal data.</p>
								</li>
								<li>
									<p>Request correction of your personal data.</p>
								</li>
								<li>
									<p>Request erasure of your personal data.</p>
								</li>
								<li>
									<p>Object to the processing of your personal data.</p>
								</li>
								<li>
									<p>Right to stop direct marketing.</p>
								</li>
								<li>
									<p>Rights in relation to automated decision making.</p>
								</li>
								<li>
									<p>
										Request restriction/stop of processing your personal data.
									</p>
								</li>
								<li>
									<p>Request transfer of your personal data.</p>
								</li>
								<li>
									<p>Right to withdraw consent.</p>
								</li>
								<li>
									<p>Right to complain/seek compensation.</p>
								</li>
							</ul>
							<p>
								Please refer to the GLOSSARY at paragraph 10 below for further
								detail on each of these rights. If you wish to exercise any of
								the rights set out above, please&nbsp;contact us.
							</p>
							<strong>No fee usually required</strong>
							<p>
								You will not have to pay a fee to access your personal data (or
								to exercise any of the other rights). However, we may charge a
								reasonable fee if your request is manifestly unfounded or
								excessive. Alternatively, we could refuse to comply with your
								request in these circumstances.
							</p>
							<strong>What we may need from you</strong>
							<p>
								We may need to request specific information from you to help us
								confirm your identity and ensure your right to access your
								personal data (or to exercise any of your other rights). This is
								a security measure to ensure that personal data is not disclosed
								to any person who has no right to receive it. We may also
								contact you to ask you for further information in relation to
								your request to speed up our response.
							</p>
							<strong>Time limit to respond</strong>
							<p>
								We try to respond to all legitimate requests within 30 days.
								Occasionally, it could take us longer than 45 days if your
								request is particularly complex or you have made a number of
								requests, also if more time is required to consult with a third
								party or other data controller (if needed) before we can reply
								to your request; In this case, we will notify you and keep you
								updated.
							</p>
							<p>
								As per the Guidance of the Ombudsman, for some requests the
								period for us to reply is 21 days:
							</p>
							<ul>
								<li>
									<p>
										request based on the right to stop or restrict processing,
									</p>
								</li>
								<li>
									<p>
										request based on the rights in relation to automated
										decision making.
									</p>
								</li>
							</ul>
							<p>
								The said period could be expanded on the same conditions as
								described in the first paragraph.
							</p>
							<p>&nbsp;</p>
							<h2>14. Legal Rights Explained</h2>
							<p>You have the right to:</p>
							<ul>
								<li>
									<p>
										Request information in relation to the collection and use of
										your personal data. This enables you to be informed at all
										times about who we are and the purposes for processing your
										personal data.
									</p>
								</li>
								<li>
									<p>
										Request access to your personal data (commonly known as a
										&quot;Data Subject Access Request&quot;). This enables you
										to receive a copy of the personal data we hold about you and
										to check that we are lawfully processing it.
									</p>
								</li>
								<li>
									<p>
										Request correction of the personal data that we hold about
										you. This enables you to have any incomplete or inaccurate
										data we hold about you corrected, though we may need to
										verify the accuracy of the new data you provide to us.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<ul>
								<li>
									<p>
										Request erasure of your personal data. This enables you to
										ask us to delete or remove personal data where there is no
										good reason for us continuing to process it. You also have
										the right to ask us to delete or remove your personal data
										where you have successfully exercised your right to object
										to processing (see below), where we may have processed your
										information unlawfully or where we are required to erase
										your personal data to comply with local law. Note, however,
										that we may not always be able to comply with your request
										of erasure for specific legal reasons which will be notified
										to you, if applicable, at the time of your request. If a
										valid erasure request is received, we will take steps to
										ensure erasure from back-up systems as well as live systems.
										You will be informed after your personal data has been
										erased.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<ul>
								<li>
									<p>
										Object to processing of your personal data (in whole or in
										relation to certain purposes or in certain manners) where we
										are relying on a legitimate interest (or those of a third
										party) and there is something about your particular
										situation which makes you want to object to processing on
										this ground as you feel it impacts on your individual rights
										and freedoms. In some cases, we may demonstrate that we have
										compelling legitimate grounds to process your information
										which override your rights and freedoms.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<ul>
								<li>
									<p>
										Request to stop direct marketing of your personal data.
										Where we are processing your personal data for direct
										marketing purposes, you have the right to notify us in
										writing requesting that we cease or do not begin processing
										your personal data for direct marketing purposes.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<ul>
								<li>
									<p>
										Right to require that decisions be reconsidered if the
										decision is made solely by automated means (without human
										involvement). You will be notified when decisions are made
										solely on an automated basis.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<ul>
								<li>
									<p>
										Request restriction of processing of your personal data.
										This enables you to ask us to suspend the processing of your
										personal data in the following scenarios:
									</p>
									<ol>
										<li>
											<p>
												If you want us to establish the data&apos;s accuracy.
											</p>
										</li>
										<li>
											<p>
												Where our use of the data is unlawful, but you do not
												want us to erase it.
											</p>
										</li>
										<li>
											<p>
												Where you need us to hold the data even if we no longer
												require it as you need it to establish, exercise or
												defend legal claims.
											</p>
										</li>
										<li>
											<p>
												You have objected to our use of your data, but we need
												to verify whether we have overriding legitimate grounds
												to use it.
											</p>
										</li>
									</ol>
								</li>
							</ul>
							<p>
								<br />
							</p>
							<ul>
								<li>
									<p>
										Request the transfer of your personal data to you or to a
										third party. We will provide to you, or a third party you
										have chosen (where technically feasible), your personal data
										in a structured, commonly used, machine-readable format.
										Note that this right only applies to automated information
										which you initially provided consent for us to use or where
										we used the information to perform a contract with you.
									</p>
								</li>
								<li>
									<p>
										Withdraw consent at any time where we are relying on consent
										to process your personal data by contacting us
										through&nbsp;privacy@eze.finance. However, this will not
										affect the lawfulness of any processing carried out before
										you withdraw your consent. If you withdraw your consent, we
										may not be able to provide certain products or services to
										you. We will advise you if this is the case at the time you
										withdraw your consent.
									</p>
								</li>
								<li>
									<p>
										Right to complain to the Ombudsman or any relevant authority
										about any perceived violation and to seek compensation for
										damages in the courts.
									</p>
								</li>
							</ul>
							<p>&nbsp;</p>
							<h2>15. Updates To Our Policy</h2>
							<p>
								We may amend or update our Privacy Policy from time to time and
								give you the opportunity to review the updated Privacy Policy
								before choosing to continue to use EZE. We will notify you of
								material changes to this policy by updating the last updated
								date at the top of this page, and we will provide you with
								explicit notice of material changes as required by law.
							</p>
							<p>
								<br />
							</p>
							<h2>Contact Us</h2>
							<p>
								If you have any questions about our Privacy Policy, please do
								not hesitate to contact us at{" "}
								<a
									href="mailto:privacy@eze.finance"
									className={classes.linkColor}
								>
									privacy@eze.finance.
								</a>
							</p>
						</Box>
					</Typography>

					{/* </Box> */}
					{/* </Box> */}
				</Container>
			</Box>
		</Page>
	);
}
