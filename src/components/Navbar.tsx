import Link from "./Link";
import { useState } from "react";
import { LogoIcon } from "./Icons";
import { Menu } from "lucide-react";
import { ResumeLink } from "@/data/links";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: "#about",
		label: "About",
	},
	{
		href: "#services",
		label: "Services",
	},
	{
		href: "#projects",
		label: "Projects",
	},
	{
		href: "#testimonials",
		label: "Testimonials",
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
			<NavigationMenu className="mx-auto">
				<NavigationMenuList className="container h-14 px-4 w-[calc(100vw-1rem)] flex justify-between ">
					<NavigationMenuItem className="font-bold flex">
						<Link target="_self" href="/" className="ml-2 font-bold text-xl flex">
							<LogoIcon />
							Ajaz Rehman
						</Link>
					</NavigationMenuItem>

					{/* mobile */}
					<span className="flex md:hidden">
						<ModeToggle />

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className="px-2">
								<Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
									<span className="sr-only">Menu Icon</span>
								</Menu>
							</SheetTrigger>

							<SheetContent side={"left"}>
								<SheetHeader>
									<SheetTitle className="font-bold text-xl">Shadcn/React</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col justify-center items-center gap-2 mt-4">
									{routeList.map(({ href, label }: RouteProps) => (
										<a
											key={label}
											href={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({ variant: "ghost" })}
										>
											{label}
										</a>
									))}
									<a
										href={ResumeLink}
										target="_blank"
										className={`w-[110px] border ${buttonVariants({
											variant: "secondary",
										})}`}
									>
										<DownloadIcon className="mr-2 w-5 h-5" />
										Resume
									</a>
								</nav>
							</SheetContent>
						</Sheet>
					</span>

					{/* desktop */}
					<nav className="hidden md:flex gap-2">
						{routeList.map((route: RouteProps, i) => (
							<a
								href={route.href}
								key={i}
								className={`text-[17px] ${buttonVariants({
									variant: "ghost",
								})}`}
							>
								{route.label}
							</a>
						))}
					</nav>

					<div className="hidden md:flex gap-2">
						<a
							href={ResumeLink}
							target="_blank"
							className={`border ${buttonVariants({ variant: "secondary" })}`}
						>
							<DownloadIcon className="mr-2 w-5 h-5" />
							Resume
						</a>

						<ModeToggle />
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
