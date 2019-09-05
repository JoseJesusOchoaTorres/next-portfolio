import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


const links = [
  	{ href: '/', label: 'Home' },
  	{ href: '/articles', label: 'Articles' },
  	{ href: '/about', label: 'About' },
  	{ href: '/contact', label: 'Contact' }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`
	return link
})

const Nav = () => (
	<nav className="navigation text-center">
		<div className="container">
			<ul className="navigation__ul flex xs-between padding-1 margin-0">
      			{links.map(({ key, href, label }) => (
				<li key={key} className="navigation__li flex">
					<Link  href={href}>
						<a title={label} className="navigation__anchor text-color-gray-3 padding-top-1 padding-right-2 padding-bottom-1 padding-left-2">{label}</a>
					</Link>
				</li>
      			))}
    		</ul>
		</div>

	<style jsx>{`
		.navigation {
			background  linear-gradient(to right, var(--white, white) 30%, transparent);
			border-bottom: 1px solid var(--gray-light-2, gray);
			position: sticky;
			top: 0px;
		}
	 
			.navigation__ul {
				flex-wrap: nowrap;
				max-width: 500px;
				overflow: auto;
			}

				.navigation__anchor {
					text-decoration: none;
					transition: all 0.3s;
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
