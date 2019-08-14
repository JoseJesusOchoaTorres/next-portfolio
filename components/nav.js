import React from 'react'
import Link from 'next/link'

const links = [
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#articles', label: 'Articles' },
  { href: '#contact', label: 'Contact' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
	<nav className="navigation">
		<ul className="navigation__ul">
      		{links.map(({ key, href, label }) => (
			<li className="navigation__li" key={key}>
				<a className="navigation__anchor" href={href}>{label}</a>
			</li>
      		))}
    	</ul>

	<style jsx>{`
		.navigation {
			background  linear-gradient(to right, var(--white, white), transparent);
			border-bottom: 1px solid var(--gray-light-2, gray);
			text-align: center;
			position: sticky;
			top: 0px;
		}
	 
			.navigation__ul {
				display: flex;
				justify-content: space-between;
				padding: 0.5rem 1rem;
				max-width: 500px;
				margin: 0;
			}

				.navigation__li {
					display: flex;
				}

				.navigation__anchor {
					color: var(--gray-3, gray);
					text-decoration: none;
					transition: all 0.3s;
					padding: 1rem;
				}

					.navigation__anchor:hover,
					.navigation__anchor:focus {
						color: var(--black, black);
					}

					.navigation__anchor:focus {
						box-shadow: 0 -4px inset var(--blue-3, black);
					}
					
    `}</style>
  </nav>
)

export default Nav
