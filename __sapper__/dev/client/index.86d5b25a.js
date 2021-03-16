import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, p as null_to_empty, l as insert_dev, m as append_dev, q as set_data_dev, r as query_selector_all, n as noop, u as destroy_each } from './client.10061cc0.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/collectif/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/collectif/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (39:2) {#each membres as personne, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*personne*/ ctx[1].nom + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*personne*/ ctx[1].description + "";
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
			attr_dev(h2, "class", "svelte-1nqn5kh");
			add_location(h2, file, 41, 8, 982);
			attr_dev(p, "class", "svelte-1nqn5kh");
			add_location(p, file, 42, 8, 1014);
			attr_dev(article, "class", "svelte-1nqn5kh");
			add_location(article, file, 40, 6, 964);
			if (img.src !== (img_src_value = urlpApi + /*personne*/ ctx[1].profilimage.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "portrait de " + /*personne*/ ctx[1].nom);
			attr_dev(img, "class", "svelte-1nqn5kh");
			add_location(img, file, 47, 8, 1103);
			attr_dev(aside, "class", "svelte-1nqn5kh");
			add_location(aside, file, 46, 6, 1087);
			attr_dev(div, "class", "" + (null_to_empty(/*i*/ ctx[3] % 2 == 0 ? "impair" : "pair") + " svelte-1nqn5kh"));
			add_location(div, file, 39, 4, 913);
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
			if (dirty & /*membres*/ 1 && t0_value !== (t0_value = /*personne*/ ctx[1].nom + "")) set_data_dev(t0, t0_value);
			if (dirty & /*membres*/ 1 && t2_value !== (t2_value = /*personne*/ ctx[1].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*membres*/ 1 && img.src !== (img_src_value = urlpApi + /*personne*/ ctx[1].profilimage.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*membres*/ 1 && img_alt_value !== (img_alt_value = "portrait de " + /*personne*/ ctx[1].nom)) {
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
		source: "(39:2) {#each membres as personne, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t;
	let div;
	let each_value = /*membres*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			link = element("link");
			t = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ysmkuu\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Le collectif";
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://use.typekit.net/ixn1cjn.css");
			add_location(link, file, 34, 4, 763);
			attr_dev(div, "class", "content svelte-1nqn5kh");
			add_location(div, file, 37, 2, 854);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, membres*/ 1) {
				each_value = /*membres*/ ctx[0];
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
			detach_dev(link);
			if (detaching) detach_dev(t);
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

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: membreQuery });
	return { membres: results.data.collectifs };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Collectif", slots, []);
	let { membres } = $$props;
	const writable_props = ["membres"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Collectif> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("membres" in $$props) $$invalidate(0, membres = $$props.membres);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		membreQuery,
		preload,
		urlpApi,
		membres
	});

	$$self.$inject_state = $$props => {
		if ("membres" in $$props) $$invalidate(0, membres = $$props.membres);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [membres];
}

class Collectif extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { membres: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Collectif",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*membres*/ ctx[0] === undefined && !("membres" in props)) {
			console.warn("<Collectif> was created without expected prop 'membres'");
		}
	}

	get membres() {
		throw new Error("<Collectif>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set membres(value) {
		throw new Error("<Collectif>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Collectif;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODZkNWIyNWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29sbGVjdGlmL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgXG4gICAgY29uc3QgbWVtYnJlUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBtZW1icmUge1xuICAgICAgICBjb2xsZWN0aWZzKHNvcnQ6IFwiaWQ6YXNjXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5vbVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJvZmlsaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICB1cmk6IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5ei9ncmFwaHFsXCIsXG4gICAgICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IG1lbWJyZVF1ZXJ5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBtZW1icmVzOiByZXN1bHRzLmRhdGEuY29sbGVjdGlmcyB9O1xuICAgIH1cbiAgICBsZXQgdXJscEFwaSA9IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5elwiO1xuICA8L3NjcmlwdD5cbiAgXG4gIDxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBtZW1icmVzO1xuICA8L3NjcmlwdD5cbiAgXG4gIDxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+TGUgY29sbGVjdGlmPC90aXRsZT5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l4bjFjam4uY3NzXCIgLz5cbiAgPC9zdmVsdGU6aGVhZD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIHsjZWFjaCBtZW1icmVzIGFzIHBlcnNvbm5lLCBpfVxuICAgIDxkaXYgY2xhc3M9e2kgJSAyID09IDAgPyBcImltcGFpclwiIDogXCJwYWlyXCJ9PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMj57cGVyc29ubmUubm9tfTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtwZXJzb25uZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXt1cmxwQXBpICsgcGVyc29ubmUucHJvZmlsaW1hZ2UudXJsfVxuICAgICAgICAgIGFsdD17XCJwb3J0cmFpdCBkZSBcIiArIHBlcnNvbm5lLm5vbX1cbiAgICAgICAgLz5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gIHsvZWFjaH1cbiAgPC9kaXY+XG4gIDxzdHlsZT5cbiAgICAuY29udGVudHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGludGVyc3RhdGU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1mYW1pbHk6IEludGVyc3RhdGU7XG4gICAgfVxuICAgIGFydGljbGUgaDIge1xuICAgICAgbWF4LXdpZHRoOiAyMnJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmMTFhMTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICBcbiAgICBhc2lkZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIH1cbiAgICAucGFpcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxuICAgIC5wYWlyIGgyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tbGVmdDogNjYlO1xuICAgICAgbWF4LXdpZHRoOjQwcmVtO1xuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOjY2MHB4KXtcbiAgICAgIC5jb250ZW50e1xuICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgIH1cbiAgICAgIGRpdiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgfVxuICAgICAgLnBhaXIgaDIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIGFydGljbGUgaDIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICBwe1xuICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICB9XG4gIH1cbiAgPC9zdHlsZT5cbiAgIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXlDYSxHQUFRLElBQUMsR0FBRzs7Ozs2QkFFZCxHQUFRLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FLaEIsT0FBTyxnQkFBRyxHQUFRLElBQUMsV0FBVyxDQUFDLEdBQUc7d0NBQ2xDLGNBQWMsZ0JBQUcsR0FBUSxJQUFDLEdBQUc7Ozs7O29EQVY1QixHQUFDLE1BQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBRWpDLEdBQVEsSUFBQyxHQUFHO3NFQUVkLEdBQVEsSUFBQyxXQUFXOzs2REFLaEIsT0FBTyxnQkFBRyxHQUFRLElBQUMsV0FBVyxDQUFDLEdBQUc7Ozs7bUVBQ2xDLGNBQWMsZ0JBQUcsR0FBUSxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFYbkMsR0FBTzs7OztnQ0FBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBQyxHQUFPOzs7OytCQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbkNFLFdBQVcsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7O2VBWUQsT0FBTztPQUNyQixNQUFNLE9BQU9BLGFBQVk7R0FDN0IsR0FBRyxFQUFFLG1DQUFtQztHQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUViLE9BQU8sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUNoQyxLQUFLLEVBQUUsV0FBVztVQUVYLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVU7OztJQUV2QyxPQUFPLEdBQUcsMkJBQTJCOzs7OztPQUk5QixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
