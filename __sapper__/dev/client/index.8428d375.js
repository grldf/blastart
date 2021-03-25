import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, r as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, l as children, f as claim_space, m as claim_text, b as detach_dev, g as attr_dev, h as add_location, k as insert_dev, j as append_dev, w as set_data_dev, q as query_selector_all, n as noop, x as destroy_each } from './client.21010bc5.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/presse/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/presse/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (40:2) {#each liens as article}
function create_each_block(ctx) {
	let a;
	let article;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let p;
	let t1_value = /*article*/ ctx[1].commentaire + "";
	let t1;
	let t2;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			article = element("article");
			img = element("img");
			t0 = space();
			p = element("p");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			img = claim_element(article_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			t2 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*article*/ ctx[1].commentaire);
			attr_dev(img, "class", "svelte-1m39f9k");
			add_location(img, file, 41, 6, 1129);
			attr_dev(p, "class", "svelte-1m39f9k");
			add_location(p, file, 42, 6, 1206);
			attr_dev(article, "class", "svelte-1m39f9k");
			add_location(article, file, 40, 41, 1113);
			attr_dev(a, "href", a_href_value = /*article*/ ctx[1].lien);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-1m39f9k");
			add_location(a, file, 40, 2, 1074);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, article);
			append_dev(article, img);
			append_dev(article, t0);
			append_dev(article, p);
			append_dev(p, t1);
			append_dev(a, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*liens*/ 1 && img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*liens*/ 1 && img_alt_value !== (img_alt_value = /*article*/ ctx[1].commentaire)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*liens*/ 1 && t1_value !== (t1_value = /*article*/ ctx[1].commentaire + "")) set_data_dev(t1, t1_value);

			if (dirty & /*liens*/ 1 && a_href_value !== (a_href_value = /*article*/ ctx[1].lien)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(40:2) {#each liens as article}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let meta;
	let t0;
	let h1;
	let t1;
	let t2;
	let div;
	let each_value = /*liens*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			meta = element("meta");
			t0 = space();
			h1 = element("h1");
			t1 = text("Reportages, interviews...");
			t2 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1y9wx0t\"]", document.head);
			meta = claim_element(head_nodes, "META", { description: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Reportages, interviews...");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta, "description", "Retrouvez un ensemble de liens vers des articles de presse sur le collectif Blast et ces membres.\n  Découvrez également des vidéos et des reportages sur les oeuvres du collectif");
			add_location(meta, file, 33, 2, 664);
			document.title = "La Presse parle de nous. Découvrez des reportages articles, vidéos et interviews de Blast";
			attr_dev(h1, "class", "svelte-1m39f9k");
			add_location(h1, file, 37, 0, 986);
			attr_dev(div, "class", "container svelte-1m39f9k");
			add_location(div, file, 38, 0, 1021);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*liens, urlpApi*/ 1) {
				each_value = /*liens*/ ctx[0];
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(meta);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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

const presseQuery = gql`
    query presse {
      presses(sort: "dateParution:desc") {
        id
        commentaire
        lien
        logoSite {
          url
        }
      }
    }
  `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: presseQuery });
	return { liens: results.data.presses };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Presse", slots, []);
	let { liens } = $$props;
	const writable_props = ["liens"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Presse> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("liens" in $$props) $$invalidate(0, liens = $$props.liens);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		presseQuery,
		preload,
		urlpApi,
		liens
	});

	$$self.$inject_state = $$props => {
		if ("liens" in $$props) $$invalidate(0, liens = $$props.liens);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [liens];
}

class Presse extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { liens: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Presse",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*liens*/ ctx[0] === undefined && !("liens" in props)) {
			console.warn("<Presse> was created without expected prop 'liens'");
		}
	}

	get liens() {
		throw new Error("<Presse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set liens(value) {
		throw new Error("<Presse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Presse;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODQyOGQzNzUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJlc3NlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5cbiAgY29uc3QgcHJlc3NlUXVlcnkgPSBncWxgXG4gICAgcXVlcnkgcHJlc3NlIHtcbiAgICAgIHByZXNzZXMoc29ydDogXCJkYXRlUGFydXRpb246ZGVzY1wiKSB7XG4gICAgICAgIGlkXG4gICAgICAgIGNvbW1lbnRhaXJlXG4gICAgICAgIGxpZW5cbiAgICAgICAgbG9nb1NpdGUge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgcXVlcnk6IHByZXNzZVF1ZXJ5LFxuICAgIH0pO1xuICAgIHJldHVybiB7IGxpZW5zOiByZXN1bHRzLmRhdGEucHJlc3NlcyB9O1xuICB9XG4gIGxldCB1cmxwQXBpID0gXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6XCI7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBsaWVucztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDxtZXRhIGRlc2NyaXB0aW9uPVwiUmV0cm91dmV6IHVuIGVuc2VtYmxlIGRlIGxpZW5zIHZlcnMgZGVzIGFydGljbGVzIGRlIHByZXNzZSBzdXIgbGUgY29sbGVjdGlmIEJsYXN0IGV0IGNlcyBtZW1icmVzLlxuICBEw6ljb3V2cmV6IMOpZ2FsZW1lbnQgZGVzIHZpZMOpb3MgZXQgZGVzIHJlcG9ydGFnZXMgc3VyIGxlcyBvZXV2cmVzIGR1IGNvbGxlY3RpZlwiLz5cbiAgPHRpdGxlPkxhIFByZXNzZSBwYXJsZSBkZSBub3VzLiBEw6ljb3V2cmV6IGRlcyByZXBvcnRhZ2VzIGFydGljbGVzLCB2aWTDqW9zIGV0IGludGVydmlld3MgZGUgQmxhc3Q8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxoMT5SZXBvcnRhZ2VzLCBpbnRlcnZpZXdzLi4uPC9oMT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgeyNlYWNoIGxpZW5zIGFzIGFydGljbGV9XG4gIDxhIGhyZWY9e2FydGljbGUubGllbn0gdGFyZ2V0PVwiX2JsYW5rXCI+PGFydGljbGU+XG4gICAgICA8aW1nIHNyYz17dXJscEFwaSArIGFydGljbGUubG9nb1NpdGUudXJsfSBhbHQ9e2FydGljbGUuY29tbWVudGFpcmV9IC8+XG4gICAgICA8cD5cbiAgICAgICAgICB7YXJ0aWNsZS5jb21tZW50YWlyZX1cbiAgICAgICAgXG4gICAgICA8L3A+XG4gICAgPC9hcnRpY2xlPlxuICA8L2E+XG4gIHsvZWFjaH1cbjwvZGl2PlxuXG48c3R5bGU+XG4gIGgxe1xuICAgIG1hcmdpbi10b3A6NjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxNXB4IDIwcHggMCAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICB9XG4gIC5jb250YWluZXIgPiBhID5hcnRpY2xlIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWYxMWExO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICAgIGhlaWdodDoyMDBweDtcbiAgfVxuICBpbWcge1xuICAgIGZsZXg6c3RhcnQ7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2VmMTFhMTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1heC1oZWlnaHQ6MTI1cHg7XG4gIH1cbiAgYXJ0aWNsZSB7XG4gICAgXG5cbiAgfVxuICBwLFxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkEyQ1csR0FBTyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FGZCxPQUFPLGVBQUcsR0FBTyxJQUFDLFFBQVEsQ0FBQyxHQUFHO29EQUFPLEdBQU8sSUFBQyxXQUFXOzs7Ozs7O2tEQUQ3RCxHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OzJEQUNQLE9BQU8sZUFBRyxHQUFPLElBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7NkVBQU8sR0FBTyxJQUFDLFdBQVc7Ozs7bUVBRTdELEdBQU8sSUFBQyxXQUFXOzsyRUFIbkIsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFEZCxHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXBDQSxXQUFXLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7OztlQVlELE9BQU87T0FDckIsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFYixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFdBQVc7VUFFWCxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzs7SUFFbEMsT0FBTyxHQUFHLDJCQUEyQjs7Ozs7T0FJOUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
