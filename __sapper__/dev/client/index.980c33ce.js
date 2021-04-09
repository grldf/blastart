import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, c as create_component, u as empty, y as query_selector_all, g as claim_element, j as detach_dev, f as claim_space, b as claim_component, k as attr_dev, l as add_location, o as append_dev, n as insert_dev, m as mount_component, t as transition_in, q as transition_out, r as destroy_component, w as validate_each_argument, z as text, h as children, A as claim_text, C as null_to_empty, D as set_data_dev, p as noop, x as destroy_each } from './client.90fdd339.js';
import { S as SvelteSeo } from './SvelteSeo.fcdac294.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/collectif/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/collectif/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (74:2) {:else}
function create_else_block(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("FUCK");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "FUCK");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "test svelte-12psx4l");
			add_location(div, file, 74, 2, 2377);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(74:2) {:else}",
		ctx
	});

	return block;
}

// (55:2) {#if posts}
function create_if_block(ctx) {
	let div;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "content svelte-12psx4l");
			add_location(div, file, 55, 2, 1980);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*urlpApi, posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(55:2) {#if posts}",
		ctx
	});

	return block;
}

// (57:2) {#each posts as post, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*post*/ ctx[1].nom + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*post*/ ctx[1].description + "";
	let t2;
	let t3;
	let aside;
	let img;
	let img_src_value;
	let img_alt_value;
	let t4;

	const block = {
		c: function create() {
			div = element("div");
			article = element("article");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			aside = element("aside");
			img = element("img");
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			article = claim_element(div_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			aside = claim_element(div_nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			img = claim_element(aside_nodes, "IMG", { src: true, alt: true, class: true });
			aside_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-12psx4l");
			add_location(h2, file, 59, 8, 2102);
			attr_dev(p, "class", "svelte-12psx4l");
			add_location(p, file, 60, 8, 2130);
			attr_dev(article, "class", "svelte-12psx4l");
			add_location(article, file, 58, 6, 2084);
			if (img.src !== (img_src_value = urlpApi + /*post*/ ctx[1].profilimage.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "portrait de " + /*post*/ ctx[1].nom);
			attr_dev(img, "class", "svelte-12psx4l");
			add_location(img, file, 65, 8, 2215);
			attr_dev(aside, "class", "svelte-12psx4l");
			add_location(aside, file, 64, 6, 2199);
			attr_dev(div, "class", "" + (null_to_empty(/*i*/ ctx[3] % 2 == 0 ? "impair" : "pair") + " svelte-12psx4l"));
			add_location(div, file, 57, 4, 2033);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, article);
			append_dev(article, h2);
			append_dev(h2, t0);
			append_dev(article, t1);
			append_dev(article, p);
			append_dev(p, t2);
			append_dev(div, t3);
			append_dev(div, aside);
			append_dev(aside, img);
			append_dev(div, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[1].nom + "")) set_data_dev(t0, t0_value);
			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[1].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = urlpApi + /*post*/ ctx[1].profilimage.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = "portrait de " + /*post*/ ctx[1].nom)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(57:2) {#each posts as post, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t0;
	let svelteseo;
	let t1;
	let if_block_anchor;
	let current;

	svelteseo = new SvelteSeo({
			props: {
				description: "Créé en 2014, Blast réunit plusieurs artistes urbains et porte ses projets auprès d’entités publiques et privées. Toujours plus monumentale, et toujours plus accessible, c’est avec cette devise que Blast crée sans cesse de nouveaux projets artistiques. A l’​ origine du projet comme l’​ Exposition - oeuvre in-situ « Le Terminal « ​ à Lyon en Juin 2018. Le collectif BLAST propose des œuvres artistiques atypiques grâce à la complémentarité de ces artistes.",
				title: "Portrait des différents membres du collefif Blast Art. Kalouf peintre muraliste, Romain Lardanchet sculpteur et dessinateur, Fabe Collage photographe de la scène urbaine ",
				openGraph: {
					type: "article",
					title: "Projets réalisés par le collectif Blastart",
					description: "Présentaion des différents projets réalisés par le collectif Blastart, comme l'expositions unique le terminal. ",
					url: "https://blast-art.art/blast",
					images: [
						{
							url: "https://blast-art.art/logo-512.png",
							width: 759,
							height: 585,
							alt: "Logo Blast art"
						}
					]
				}
			},
			$$inline: true
		});

	function select_block_type(ctx, dirty) {
		if (/*posts*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			link = element("link");
			t0 = space();
			create_component(svelteseo.$$.fragment);
			t1 = space();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mne3ix\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(svelteseo.$$.fragment, nodes);
			t1 = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://use.typekit.net/ixn1cjn.css");
			add_location(link, file, 34, 4, 778);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link);
			insert_dev(target, t0, anchor);
			mount_component(svelteseo, target, anchor);
			insert_dev(target, t1, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(svelteseo.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(svelteseo.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(link);
			if (detaching) detach_dev(t0);
			destroy_component(svelteseo, detaching);
			if (detaching) detach_dev(t1);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const membreQuery = gql`
      query membre {
        collectifs(sort: "id:asc") {
          id
          nom
          description
          profilimage {
            url
          }
        }
      }
    `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: membreQuery });
	return { posts: results.data.collectifs };
}

let urlpApi = "https://grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Collectif", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Collectif> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		SvelteSeo,
		membreQuery,
		preload,
		urlpApi,
		posts
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Collectif extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Collectif",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Collectif> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Collectif>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Collectif>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Collectif;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTgwYzMzY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29sbGVjdGlmL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgICBpbXBvcnQgU3ZlbHRlU2VvIGZyb20gXCJzdmVsdGUtc2VvXCI7XG4gICAgY29uc3QgbWVtYnJlUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBtZW1icmUge1xuICAgICAgICBjb2xsZWN0aWZzKHNvcnQ6IFwiaWQ6YXNjXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5vbVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJvZmlsaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG5cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBtZW1icmVRdWVyeSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgcG9zdHM6IHJlc3VsdHMuZGF0YS5jb2xsZWN0aWZzIH07XG4gICAgfVxuICAgIGxldCB1cmxwQXBpID0gXCJodHRwczovL2dybGRmYXVyZS54eXpcIjtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgcG9zdHM7XG4gIDwvc2NyaXB0PlxuICBcbiAgPHN2ZWx0ZTpoZWFkPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXhuMWNqbi5jc3NcIiAvPlxuICA8L3N2ZWx0ZTpoZWFkPlxuICA8U3ZlbHRlU2VvXG4gIGRlc2NyaXB0aW9uPSBcIkNyw6nDqSBlbiAyMDE0LCBCbGFzdCByw6l1bml0IHBsdXNpZXVycyBhcnRpc3RlcyB1cmJhaW5zIGV0IHBvcnRlIHNlcyBwcm9qZXRzIGF1cHLDqHMgZOKAmWVudGl0w6lzIHB1YmxpcXVlcyBldCBwcml2w6llcy4gVG91am91cnMgcGx1cyBtb251bWVudGFsZSwgZXQgdG91am91cnMgcGx1cyBhY2Nlc3NpYmxlLCBj4oCZZXN0IGF2ZWMgY2V0dGUgZGV2aXNlIHF1ZSBCbGFzdCBjcsOpZSBzYW5zIGNlc3NlIGRlIG5vdXZlYXV4IHByb2pldHMgYXJ0aXN0aXF1ZXMuIEEgbOKAmeKAiyBvcmlnaW5lIGR1IHByb2pldCBjb21tZSBs4oCZ4oCLIEV4cG9zaXRpb24gLSBvZXV2cmUgaW4tc2l0dSDCqyBMZSBUZXJtaW5hbCDCqyDigIsgw6AgTHlvbiBlbiBKdWluIDIwMTguIExlIGNvbGxlY3RpZiBCTEFTVCBwcm9wb3NlIGRlcyDFk3V2cmVzIGFydGlzdGlxdWVzIGF0eXBpcXVlcyBncsOiY2Ugw6AgbGEgY29tcGzDqW1lbnRhcml0w6kgZGUgY2VzIGFydGlzdGVzLlwiXG4gIHRpdGxlPSBcIlBvcnRyYWl0IGRlcyBkaWZmw6lyZW50cyBtZW1icmVzIGR1IGNvbGxlZmlmIEJsYXN0IEFydC4gS2Fsb3VmIHBlaW50cmUgbXVyYWxpc3RlLCBSb21haW4gTGFyZGFuY2hldCBzY3VscHRldXIgZXQgZGVzc2luYXRldXIsIEZhYmUgQ29sbGFnZSBwaG90b2dyYXBoZSBkZSBsYSBzY8OobmUgdXJiYWluZSBcIlxuICBvcGVuR3JhcGg9e3tcbiAgdHlwZTogXCJhcnRpY2xlXCIsXG4gIHRpdGxlOiBcIlByb2pldHMgcsOpYWxpc8OpcyBwYXIgbGUgY29sbGVjdGlmIEJsYXN0YXJ0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHLDqXNlbnRhaW9uIGRlcyBkaWZmw6lyZW50cyBwcm9qZXRzIHLDqWFsaXPDqXMgcGFyIGxlIGNvbGxlY3RpZiBCbGFzdGFydCwgY29tbWUgbCdleHBvc2l0aW9ucyB1bmlxdWUgbGUgdGVybWluYWwuIFwiLFxuICAgIHVybDogXCJodHRwczovL2JsYXN0LWFydC5hcnQvYmxhc3RcIixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYmxhc3QtYXJ0LmFydC9sb2dvLTUxMi5wbmdcIixcbiAgICAgICAgd2lkdGg6IDc1OSxcbiAgICAgICAgaGVpZ2h0OiA1ODUsXG4gICAgICAgIGFsdDogXCJMb2dvIEJsYXN0IGFydFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9fVxuLz5cbiAgeyNpZiBwb3N0c31cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgeyNlYWNoIHBvc3RzIGFzIHBvc3QsIGl9XG4gICAgPGRpdiBjbGFzcz17aSAlIDIgPT0gMCA/IFwiaW1wYWlyXCIgOiBcInBhaXJcIn0+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPntwb3N0Lm5vbX08L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXt1cmxwQXBpICsgcG9zdC5wcm9maWxpbWFnZS51cmx9XG4gICAgICAgICAgYWx0PXtcInBvcnRyYWl0IGRlIFwiICsgcG9zdC5ub219XG4gICAgICAgIC8+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICB7L2VhY2h9XG4gIDwvZGl2PlxuICB7OmVsc2V9XG4gIDxkaXYgY2xhc3M9XCJ0ZXN0XCI+RlVDSzwvZGl2Plxuey9pZn1cbiAgPHN0eWxlPlxuICAgIC5jb250ZW50e1xuICAgICAgICBmb250LWZhbWlseTogaW50ZXJzdGF0ZSA7XG4gICAgICAgIHBhZGRpbmc6IDYwcHggMCAwOyBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIH1cbiAgICBkaXYge1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyc3RhdGU7XG4gICAgfVxuICAgIGgye1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICBjb2xvcjogIzNiM2IzODtcbiAgICB9XG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBtYXgtd2lkdGg6IDIycmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWYxMWExO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIGFzaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTByZW07XG4gICAgfVxuICAgIC5wYWlye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgLnBhaXIgaDIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2NiU7XG4gICAgICBtYXgtd2lkdGg6NDByZW07XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgICAgLmNvbnRlbnR7XG4gICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgaW1ne1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICB9XG4gICAgICAucGFpciBoMiB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIHB7XG4gICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIH1cbiAgfVxuICA8L3N0eWxlPlxuICAiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBd0RTLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBQUMsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBR0ssR0FBSSxJQUFDLEdBQUc7Ozs7eUJBRVYsR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBS1osT0FBTyxZQUFHLEdBQUksSUFBQyxXQUFXLENBQUMsR0FBRzt3Q0FDOUIsY0FBYyxZQUFHLEdBQUksSUFBQyxHQUFHOzs7OztvREFWeEIsR0FBQyxNQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQUVqQyxHQUFJLElBQUMsR0FBRztnRUFFVixHQUFJLElBQUMsV0FBVzs7MkRBS1osT0FBTyxZQUFHLEdBQUksSUFBQyxXQUFXLENBQUMsR0FBRzs7OztpRUFDOUIsY0FBYyxZQUFHLEdBQUksSUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EzQnRDLElBQUksRUFBRSxTQUFTO0tBQ2YsS0FBSyxFQUFFLDRDQUE0QztLQUNqRCxXQUFXLEVBQUUsaUhBQWlIO0tBQzlILEdBQUcsRUFBRSw2QkFBNkI7S0FDbEMsTUFBTTs7T0FFRixHQUFHLEVBQUUsb0NBQW9DO09BQ3pDLEtBQUssRUFBRSxHQUFHO09BQ1YsTUFBTSxFQUFFLEdBQUc7T0FDWCxHQUFHLEVBQUUsZ0JBQWdCOzs7Ozs7Ozs7Z0JBS3RCLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFuREYsV0FBVyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7ZUFZRCxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7T0FDckMsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FHYixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFdBQVc7VUFFWCxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7SUFFckMsT0FBTyxHQUFHLHVCQUF1Qjs7Ozs7T0FJMUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
