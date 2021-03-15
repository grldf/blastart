import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, q as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, G as null_to_empty, m as insert_dev, n as append_dev, o as set_data_dev, A as query_selector_all, p as noop, D as destroy_each } from './client.e3a9c99b.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/News/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/News/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (54:4) {:else}
function create_else_block(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = urlpApi + /*newpub*/ ctx[1].image.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*newpub*/ ctx[1].titre);
			attr_dev(img, "class", "svelte-1nqn5kh");
			add_location(img, file, 54, 8, 1247);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 1 && img.src !== (img_src_value = urlpApi + /*newpub*/ ctx[1].image.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*news*/ 1 && img_alt_value !== (img_alt_value = /*newpub*/ ctx[1].titre)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(54:4) {:else}",
		ctx
	});

	return block;
}

// (49:8) {#if newpub.image === null }
function create_if_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Blast logo");
			attr_dev(img, "class", "svelte-1nqn5kh");
			add_location(img, file, 49, 10, 1154);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(49:8) {#if newpub.image === null }",
		ctx
	});

	return block;
}

// (40:2) {#each news as newpub, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*newpub*/ ctx[1].titre + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*newpub*/ ctx[1].contenu + "";
	let t2;
	let t3;
	let aside;
	let t4;

	function select_block_type(ctx, dirty) {
		if (/*newpub*/ ctx[1].image === null) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

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
			if_block.c();
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
			if_block.l(aside_nodes);
			aside_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-1nqn5kh");
			add_location(h2, file, 42, 8, 1000);
			attr_dev(p, "class", "svelte-1nqn5kh");
			add_location(p, file, 43, 8, 1032);
			attr_dev(article, "class", "svelte-1nqn5kh");
			add_location(article, file, 41, 6, 982);
			attr_dev(aside, "class", "svelte-1nqn5kh");
			add_location(aside, file, 47, 6, 1099);
			attr_dev(div, "class", "" + (null_to_empty(/*i*/ ctx[3] % 2 == 0 ? "impair" : "pair") + " svelte-1nqn5kh"));
			add_location(div, file, 40, 4, 931);
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
			if_block.m(aside, null);
			append_dev(div, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 1 && t0_value !== (t0_value = /*newpub*/ ctx[1].titre + "")) set_data_dev(t0, t0_value);
			if (dirty & /*news*/ 1 && t2_value !== (t2_value = /*newpub*/ ctx[1].contenu + "")) set_data_dev(t2, t2_value);

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(aside, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(40:2) {#each news as newpub, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t;
	let div;
	let each_value = /*news*/ ctx[0];
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
			add_location(link, file, 35, 4, 786);
			attr_dev(div, "class", "content svelte-1nqn5kh");
			add_location(div, file, 38, 2, 877);
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
			if (dirty & /*news, urlpApi*/ 1) {
				each_value = /*news*/ ctx[0];
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

const newsQuery = gql`
      query membre {
        nouvelles(sort: "id:asc") {
          id
          titre
          contenu
          datePublication
          image {
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

	const results = await client.query({ query: newsQuery });
	return { news: results.data.nouvelles };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("News", slots, []);
	let { news } = $$props;
	const writable_props = ["news"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<News> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("news" in $$props) $$invalidate(0, news = $$props.news);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		newsQuery,
		preload,
		urlpApi,
		news
	});

	$$self.$inject_state = $$props => {
		if ("news" in $$props) $$invalidate(0, news = $$props.news);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [news];
}

class News extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { news: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "News",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*news*/ ctx[0] === undefined && !("news" in props)) {
			console.warn("<News> was created without expected prop 'news'");
		}
	}

	get news() {
		throw new Error("<News>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set news(value) {
		throw new Error("<News>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default News;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjcwZmE4NmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvTmV3cy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG4gIFxuICAgIGNvbnN0IG5ld3NRdWVyeSA9IGdxbGBcbiAgICAgIHF1ZXJ5IG1lbWJyZSB7XG4gICAgICAgIG5vdXZlbGxlcyhzb3J0OiBcImlkOmFzY1wiKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRyZVxuICAgICAgICAgIGNvbnRlbnVcbiAgICAgICAgICBkYXRlUHVibGljYXRpb25cbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgdXJpOiBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXovZ3JhcGhxbFwiLFxuICAgICAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBuZXdzUXVlcnksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IG5ld3M6IHJlc3VsdHMuZGF0YS5ub3V2ZWxsZXMgfTtcbiAgICB9XG4gICAgbGV0IHVybHBBcGkgPSBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXpcIjtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgbmV3cztcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkxlIGNvbGxlY3RpZjwvdGl0bGU+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9peG4xY2puLmNzc1wiIC8+XG4gIDwvc3ZlbHRlOmhlYWQ+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICB7I2VhY2ggbmV3cyBhcyBuZXdwdWIsIGl9XG4gICAgPGRpdiBjbGFzcz17aSAlIDIgPT0gMCA/IFwiaW1wYWlyXCIgOiBcInBhaXJcIn0+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPntuZXdwdWIudGl0cmV9PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge25ld3B1Yi5jb250ZW51fVxuICAgICAgICA8L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXNpZGU+XG4gICAgICAgIHsjaWYgbmV3cHViLmltYWdlID09PSBudWxsIH1cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwibG9nby01MTIucG5nXCJcbiAgICAgICAgICBhbHQ9XCJCbGFzdCBsb2dvXCJcbiAgICAgICAgLz5cbiAgICB7OmVsc2V9IFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXt1cmxwQXBpICsgbmV3cHViLmltYWdlLnVybH1cbiAgICAgICAgICBhbHQ9e25ld3B1Yi50aXRyZX1cbiAgICAgICAgLz5cbiAgICAgICB7L2lmfVxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgey9lYWNofVxuICA8L2Rpdj5cbiAgPHN0eWxlPlxuICAgIC5jb250ZW50e1xuICAgICAgICBmb250LWZhbWlseTogaW50ZXJzdGF0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LWZhbWlseTogSW50ZXJzdGF0ZTtcbiAgICB9XG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBtYXgtd2lkdGg6IDIycmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWYxMWExO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIGFzaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTByZW07XG4gICAgfVxuICAgIC5wYWlye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgLnBhaXIgaDIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2NiU7XG4gICAgICBtYXgtd2lkdGg6NDByZW07XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgICAgLmNvbnRlbnR7XG4gICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgaW1ne1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICB9XG4gICAgICAucGFpciBoMiB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIHB7XG4gICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIH1cbiAgfVxuICA8L3N0eWxlPlxuICAiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0F1RGUsT0FBTyxjQUFHLEdBQU0sSUFBQyxLQUFLLENBQUMsR0FBRzttREFDMUIsR0FBTSxJQUFDLEtBQUs7Ozs7Ozs7OzBEQURaLE9BQU8sY0FBRyxHQUFNLElBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7MkVBQzFCLEdBQU0sSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFkZCxHQUFNLElBQUMsS0FBSzs7OzsyQkFFZCxHQUFNLElBQUMsT0FBTzs7Ozs7OztpQkFJWixHQUFNLElBQUMsS0FBSyxLQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0RBUmxCLEdBQUMsTUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztpRUFFakMsR0FBTSxJQUFDLEtBQUs7aUVBRWQsR0FBTSxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUxoQixHQUFJOzs7O2dDQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFDLEdBQUk7Ozs7K0JBQVQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFwQ0UsU0FBUyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O2VBYUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BQ3JDLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWIsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxTQUFTO1VBRVQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUzs7O0lBRW5DLE9BQU8sR0FBRywyQkFBMkI7Ozs7O09BSTlCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
