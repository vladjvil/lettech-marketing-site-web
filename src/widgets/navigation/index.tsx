import { useUnit } from 'effector-react';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { createEvent, createStore } from 'effector';
import { Link, useRouter } from 'atomic-router-react';
import { routes } from '../../shared/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '../../shared/lib/cn';

const navItems = [
  { path: '/', label: 'Home', route: routes.home },
  { path: '/about', label: 'About', route: routes.about },
  { path: '/services', label: 'Services', route: routes.services },
  { path: '/technology', label: 'Technology', route: routes.technology },
  { path: '/cases', label: 'Cases', route: routes.cases },
  { path: '/jobs', label: 'Jobs', route: routes.jobs },
  { path: '/contacts', label: 'Contacts', route: routes.contacts },
];

const toggleNav = createEvent();
const $isNavOpen = createStore(false).on(toggleNav, (state) => !state);

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const isOpen = useUnit($isNavOpen);

  const router = useRouter();
  const activeRoutes = useUnit(router.$activeRoutes);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 shadow-md transition-colors duration-300',
        theme === 'dark' ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-gray-900',
        'backdrop-blur-lg font-sans'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              to={routes.home}
              className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 transition"
            >
              Let<span className="text-blue-600">Tech</span>
            </Link>
          </motion.div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navItems.indexOf(item), duration: 0.5, ease: 'easeOut' }}
              >
                <Link
                  to={item.route}
                  className={cn(
                    'relative text-lg font-medium transition-all hover:text-blue-600 tracking-wide',
                    activeRoutes.some((route) => route === item.route)
                      ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600'
                      : ''
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {/* Кнопка смены темы */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-300"
            >
              {theme === 'dark' ? (
                <Sun size={24} className="text-yellow-400 transform hover:rotate-90" />
              ) : (
                <Moon size={24} className="text-blue-500 transform hover:rotate-90" />
              )}
            </motion.button>
          </div>

          {/* Кнопка меню для мобильных */}
          <motion.button
            onClick={() => toggleNav()}
            className="md:hidden p-2"
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ rotate: -90, scale: 0.9 }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-lg"
            >
              <div className="py-6 space-y-6 px-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 * navItems.indexOf(item),
                      duration: 0.5,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      to={item.route}
                      className={cn(
                        'block text-lg font-semibold tracking-wide transition-colors hover:text-blue-600',
                        activeRoutes.some((route) => route === item.route) && 'text-blue-600'
                      )}
                      onClick={() => toggleNav()}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
  onClick={toggleTheme}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={cn(
    'flex items-center justify-center w-12 h-12 rounded-full transition-colors',
    'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
  )}
>
  {theme === 'dark' ? (
    <Sun size={24} className="text-yellow-400 transform hover:rotate-90" />
  ) : (
    <Moon size={24} className="text-blue-500 transform hover:rotate-90" />
  )}
</motion.button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
