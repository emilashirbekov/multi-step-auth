import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/shared/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-black text-white'>
      <div className='max-w-screen-xl m-auto p-4'>
        <div className='mr-4 hidden md:flex gap-3'>
          <Link to='/' className='mr-6 flex items-center space-x-2'>
            <span className='hidden font-bold sm:inline-block'>Logo</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to='/'
                  className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-black'
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to='/login'
                  className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-black'
                >
                  Login
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
