// Modified from https://ui.aceternity.com/components/aurora-background

export function Aurora() {
	return (
		<div className="absolute top-0 left-0 size-full transition-bg -z-50 overflow-hidden">
			<div className="[--white-gradient:repeating-linear-gradient(100deg,white_0%,white_7%,transparent_10%,transparent_12%,white_16%)] [--dark-gradient:repeating-linear-gradient(100deg,black_0%,black_7%,transparent_10%,transparent_12%,black_16%)] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference absolute -inset-[10px] opacity-50 will-change-transform [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]" />
		</div>
	);
}
