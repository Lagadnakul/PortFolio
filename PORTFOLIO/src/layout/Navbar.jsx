import { useState, useEffect } from 'react'
import { Button } from '../Components/Button.jsx'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            // Update scroll state for navbar background
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header 
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500 ease-in-out
                ${isScrolled 
                    ? 'py-3 bg-background/90 backdrop-blur-md shadow-lg shadow-black/10' 
                    : 'py-5 bg-transparent'
                }
            `}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a 
                    href="#hero" 
                    className={`
                        text-xl font-bold tracking-tight transition-all duration-300
                        ${isScrolled ? 'text-primary' : 'text-foreground hover:text-primary'}
                    `}
                >
                    NL<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div 
                        className={`
                            rounded-full px-2 py-1 flex items-center gap-1
                            transition-all duration-500
                            ${isScrolled ? 'glass-strong' : 'glass'}
                        `}
                    >
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index}
                                className={`
                                    px-4 py-2 text-sm rounded-full transition-all duration-300
                                    ${activeSection === link.href.substring(1)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                                    }
                                `}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div> 
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <Button 
                            size='sm'
                            className={`
                                transition-all duration-300
                                ${isScrolled ? 'shadow-primary/30' : 'shadow-primary/20'}
                            `}
                        >
                            Contact Me
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`
                        md:hidden p-2 rounded-full transition-all duration-300
                        ${isScrolled ? 'text-primary' : 'text-foreground'}
                        hover:bg-primary/10
                    `}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`
                    md:hidden overflow-hidden transition-all duration-500 ease-in-out
                    ${isMobileMenuOpen 
                        ? 'max-h-screen opacity-100' 
                        : 'max-h-0 opacity-0'
                    }
                `}
            >
                <div className="glass-strong border-t border-border/50">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index}
                                onClick={handleLinkClick}
                                className={`
                                    text-lg py-3 px-4 rounded-xl transition-all duration-300
                                    ${activeSection === link.href.substring(1)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-surface/50'
                                    }
                                `}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-border/50 mt-2">
                            <a href="#contact" onClick={handleLinkClick}>
                                <Button className="w-full">Contact Me</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}