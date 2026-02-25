import { useState } from "react";
import {
	BrowserRouter,
	Navigate,
	NavLink,
	Route,
	Routes,
} from "react-router-dom";

type NavItem = {
	label: string;
	to: string;
};

const NAV_ITEMS: NavItem[] = [
	{ label: "Status", to: "/" },
	{ label: "Blog", to: "/blog" },
	{ label: "Theses", to: "/theses" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	return (
		<div className="navbar">
			<ul className="navbaritems">
				{NAV_ITEMS.map((item) => (
					<li key={item.to}>
						<NavLink
							className="navbaritem"
							to={item.to}
							style={({ isActive }) =>
								isActive ? { color: "white" } : undefined
							}
						>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}

function StatusPage() {
	return (
		<div>
			<h2>Status</h2>
			<p>
				<i>chilling</i>
			</p>
		</div>
	);
}

function BlogPage() {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div>
			<h2>Blog</h2>
			<h3>
				<button
					type="button"
					className="blogPostToggle"
					aria-expanded={isExpanded}
					onClick={() => setIsExpanded((expanded) => !expanded)}
				>
					<span className="blogPostToggleIndicator" aria-hidden="true">
						{isExpanded ? "▼" : "▶"}
					</span>
					My first blog post, February 2026
				</button>
			</h3>
			{isExpanded && (
				<p>
					For so many years, I've been wanting to write some cool blog post on
					my personal website which is not really good for anything other than
					reserving my username as a domain name.
					<br />
					<br />I never did it though, I was waiting for the perfect,
					interesting and clever thing that would really make sense for me to
					write about on my blog.
					<br />
					<br />
					Today I decided: to hell with that.
					<br />
					<br />
					Here&apos;s my first blog post.
				</p>
			)}
		</div>
	);
}

function ThesesPage() {
	return (
		<div>
			<h2>Theses</h2>
			<p>
				In my{" "}
				<a
					href="https://doi.org/10.3929/ethz-b-000612634"
					target="_blank"
					rel="noopener noreferrer"
				>
					Master&apos;s thesis
				</a>
				, we analyze developers&apos; efforts to make open-source software GDPR
				compliant.
				<br />
				<br />
				Also, you can take a look at my{" "}
				<a href="thesis.pdf" target="_blank" rel="noopener noreferrer">
					Bachelor&apos;s thesis
				</a>{" "}
				about combining reinforcement learning with answer set programming.
			</p>
		</div>
	);
}

function ContactPage() {
	return (
		<>
			<div>
				<h2>Contact</h2>
				<p>
					Find me posting on{" "}
					<a
						href="https://x.com/fxgst"
						target="_blank"
						rel="noopener noreferrer"
					>
						X
					</a>{" "}
					and coding on{" "}
					<a
						href="https://github.com/fxgst"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					.
				</p>
			</div>
			<footer>
				This website is hosted entirely{" "}
				<a href="https://fdesx-eiaaa-aaaan-qd27q-cai.icp0.io/contact">
					on-chain
				</a>{" "}
				on the{" "}
				<a
					href="https://internetcomputer.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Internet Computer
				</a>
				.
			</footer>
		</>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<h1>Elias Datler</h1>
			<main>
				<Navbar />
				<Routes>
					<Route path="/" element={<StatusPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/theses" element={<ThesesPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
