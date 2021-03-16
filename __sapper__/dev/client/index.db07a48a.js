import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, w as toggle_class, l as insert_dev, m as append_dev, q as set_data_dev, n as noop, o as validate_each_argument, E as create_component, F as claim_component, G as mount_component, z as transition_in, A as transition_out, I as destroy_component, y as listen_dev, B as check_outros, u as destroy_each, C as run_all, J as group_outros } from './client.c8be340f.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/components/Slide.svelte generated by Svelte v3.35.0 */

const file$1 = "src/components/Slide.svelte";

function create_fragment$1(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let t2;
	let t3;
	let img;
	let img_src_value;
	let t4;
	let div1;
	let p;
	let a;
	let t5;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(/*slideNo*/ ctx[2]);
			t1 = text(" / ");
			t2 = text(/*totalSlide*/ ctx[3]);
			t3 = space();
			img = element("img");
			t4 = space();
			div1 = element("div");
			p = element("p");
			a = element("a");
			t5 = text(/*infos*/ ctx[5]);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*slideNo*/ ctx[2]);
			t1 = claim_text(div0_nodes, " / ");
			t2 = claim_text(div0_nodes, /*totalSlide*/ ctx[3]);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			img = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t5 = claim_text(a_nodes, /*infos*/ ctx[5]);
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "numbertext svelte-87fpw4");
			add_location(div0, file$1, 11, 2, 232);
			if (img.src !== (img_src_value = /*imageUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alternText*/ ctx[1]);
			attr_dev(img, "class", "svelte-87fpw4");
			add_location(img, file$1, 12, 2, 289);
			attr_dev(a, "href", /*slug*/ ctx[6]);
			attr_dev(a, "class", "link svelte-87fpw4");
			add_location(a, file$1, 14, 7, 358);
			attr_dev(p, "class", "svelte-87fpw4");
			add_location(p, file$1, 14, 4, 355);
			attr_dev(div1, "class", "infos svelte-87fpw4");
			add_location(div1, file$1, 13, 2, 331);
			attr_dev(div2, "class", "mySlides svelte-87fpw4");
			toggle_class(div2, "show", /*imageShowing*/ ctx[4]);
			add_location(div2, file$1, 10, 0, 181);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, t2);
			append_dev(div2, t3);
			append_dev(div2, img);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, p);
			append_dev(p, a);
			append_dev(a, t5);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*slideNo*/ 4) set_data_dev(t0, /*slideNo*/ ctx[2]);
			if (dirty & /*totalSlide*/ 8) set_data_dev(t2, /*totalSlide*/ ctx[3]);

			if (dirty & /*imageUrl*/ 1 && img.src !== (img_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alternText*/ 2) {
				attr_dev(img, "alt", /*alternText*/ ctx[1]);
			}

			if (dirty & /*infos*/ 32) set_data_dev(t5, /*infos*/ ctx[5]);

			if (dirty & /*slug*/ 64) {
				attr_dev(a, "href", /*slug*/ ctx[6]);
			}

			if (dirty & /*imageShowing*/ 16) {
				toggle_class(div2, "show", /*imageShowing*/ ctx[4]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Slide", slots, []);
	let { imageUrl } = $$props;
	let { alternText } = $$props;
	let { slideNo } = $$props;
	let { totalSlide } = $$props;
	let { imageShowing } = $$props;
	let { infos } = $$props;
	let { slug } = $$props;

	const writable_props = [
		"imageUrl",
		"alternText",
		"slideNo",
		"totalSlide",
		"imageShowing",
		"infos",
		"slug"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Slide> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(5, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(6, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({
		imageUrl,
		alternText,
		slideNo,
		totalSlide,
		imageShowing,
		infos,
		slug
	});

	$$self.$inject_state = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(5, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(6, slug = $$props.slug);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [imageUrl, alternText, slideNo, totalSlide, imageShowing, infos, slug];
}

class Slide extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			imageUrl: 0,
			alternText: 1,
			slideNo: 2,
			totalSlide: 3,
			imageShowing: 4,
			infos: 5,
			slug: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Slide",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*imageUrl*/ ctx[0] === undefined && !("imageUrl" in props)) {
			console.warn("<Slide> was created without expected prop 'imageUrl'");
		}

		if (/*alternText*/ ctx[1] === undefined && !("alternText" in props)) {
			console.warn("<Slide> was created without expected prop 'alternText'");
		}

		if (/*slideNo*/ ctx[2] === undefined && !("slideNo" in props)) {
			console.warn("<Slide> was created without expected prop 'slideNo'");
		}

		if (/*totalSlide*/ ctx[3] === undefined && !("totalSlide" in props)) {
			console.warn("<Slide> was created without expected prop 'totalSlide'");
		}

		if (/*imageShowing*/ ctx[4] === undefined && !("imageShowing" in props)) {
			console.warn("<Slide> was created without expected prop 'imageShowing'");
		}

		if (/*infos*/ ctx[5] === undefined && !("infos" in props)) {
			console.warn("<Slide> was created without expected prop 'infos'");
		}

		if (/*slug*/ ctx[6] === undefined && !("slug" in props)) {
			console.warn("<Slide> was created without expected prop 'slug'");
		}
	}

	get imageUrl() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageUrl(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alternText() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alternText(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slideNo() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slideNo(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get totalSlide() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set totalSlide(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get imageShowing() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageShowing(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get infos() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set infos(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/blast/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/blast/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (55:0) {#each presentation as post}
function create_each_block(ctx) {
	let slide;
	let current;

	slide = new Slide({
			props: {
				imageUrl: urlpApi + /*post*/ ctx[4].cover.url,
				alternText: /*post*/ ctx[4].titre,
				slideNo: /*imageShowIndex*/ ctx[1],
				totalSlide: /*presentation*/ ctx[0].length,
				imageShowing: /*post*/ ctx[4].idP * -1 + /*presentation*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1],
				infos: /*post*/ ctx[4].titre,
				slug: urlSlug + /*post*/ ctx[4].Slug
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(slide.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(slide.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(slide, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const slide_changes = {};
			if (dirty & /*presentation*/ 1) slide_changes.imageUrl = urlpApi + /*post*/ ctx[4].cover.url;
			if (dirty & /*presentation*/ 1) slide_changes.alternText = /*post*/ ctx[4].titre;
			if (dirty & /*imageShowIndex*/ 2) slide_changes.slideNo = /*imageShowIndex*/ ctx[1];
			if (dirty & /*presentation*/ 1) slide_changes.totalSlide = /*presentation*/ ctx[0].length;
			if (dirty & /*presentation, imageShowIndex*/ 3) slide_changes.imageShowing = /*post*/ ctx[4].idP * -1 + /*presentation*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1];
			if (dirty & /*presentation*/ 1) slide_changes.infos = /*post*/ ctx[4].titre;
			if (dirty & /*presentation*/ 1) slide_changes.slug = urlSlug + /*post*/ ctx[4].Slug;
			slide.$set(slide_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(slide.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(slide.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(slide, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(55:0) {#each presentation as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let t0;
	let a0;
	let t1;
	let t2;
	let a1;
	let t3;
	let current;
	let mounted;
	let dispose;
	let each_value = /*presentation*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			a0 = element("a");
			t1 = text("❮");
			t2 = space();
			a1 = element("a");
			t3 = text("❯");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, "❮");
			a0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t3 = claim_text(a1_nodes, "❯");
			a1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "container svelte-1mpw5tt");
			add_location(div0, file, 53, 0, 1089);
			attr_dev(a0, "href", "blast/#arrowL");
			attr_dev(a0, "class", "prev svelte-1mpw5tt");
			add_location(a0, file, 66, 0, 1515);
			attr_dev(a1, "href", "blast/#arrowR");
			attr_dev(a1, "class", "next svelte-1mpw5tt");
			add_location(a1, file, 67, 0, 1586);
			add_location(div1, file, 52, 0, 1083);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div1, t0);
			append_dev(div1, a0);
			append_dev(a0, t1);
			append_dev(div1, t2);
			append_dev(div1, a1);
			append_dev(a1, t3);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(a0, "click", /*prevSlide*/ ctx[2], false, false, false),
					listen_dev(a1, "click", /*nextSlide*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, presentation, imageShowIndex, urlSlug*/ 3) {
				each_value = /*presentation*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
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

const imageQuery = gql`
   query cover{
     projets(sort:"date:desc"){
       id
       idP
       titre
       cover {
         url
       }
       Slug
     }
   }
 `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: imageQuery });
	return { presentation: results.data.projets };
}

const urlpApi = "https://grldfaure.xyz";
const urlSlug = "projet/";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Blast", slots, []);
	let { presentation } = $$props;

	// slideshow change image	
	let imageShowIndex = 1;

	const prevSlide = () => {
		if (imageShowIndex === 1) {
			$$invalidate(1, imageShowIndex = presentation.length);
		} else {
			$$invalidate(1, imageShowIndex -= 1);
		}
	};

	const nextSlide = () => {
		if (imageShowIndex === presentation.length) {
			$$invalidate(1, imageShowIndex = 1);
		} else {
			$$invalidate(1, imageShowIndex += 1);
		}
	};

	const writable_props = ["presentation"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blast> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("presentation" in $$props) $$invalidate(0, presentation = $$props.presentation);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		Slide,
		imageQuery,
		preload,
		urlpApi,
		urlSlug,
		presentation,
		imageShowIndex,
		prevSlide,
		nextSlide
	});

	$$self.$inject_state = $$props => {
		if ("presentation" in $$props) $$invalidate(0, presentation = $$props.presentation);
		if ("imageShowIndex" in $$props) $$invalidate(1, imageShowIndex = $$props.imageShowIndex);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [presentation, imageShowIndex, prevSlide, nextSlide];
}

class Blast extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { presentation: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blast",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*presentation*/ ctx[0] === undefined && !("presentation" in props)) {
			console.warn("<Blast> was created without expected prop 'presentation'");
		}
	}

	get presentation() {
		throw new Error("<Blast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set presentation(value) {
		throw new Error("<Blast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blast;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGIwN2E0OGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxhc3QvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaW1hZ2VVcmw7XG4gIGV4cG9ydCBsZXQgYWx0ZXJuVGV4dDtcbiAgZXhwb3J0IGxldCBzbGlkZU5vO1xuICBleHBvcnQgbGV0IHRvdGFsU2xpZGU7XG4gIGV4cG9ydCBsZXQgaW1hZ2VTaG93aW5nO1xuICBleHBvcnQgbGV0IGluZm9zO1xuICBleHBvcnQgbGV0IHNsdWc7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cIm15U2xpZGVzXCIgY2xhc3M6c2hvdz17aW1hZ2VTaG93aW5nfT5cbiAgPGRpdiBjbGFzcz1cIm51bWJlcnRleHRcIj57c2xpZGVOb30gLyB7dG90YWxTbGlkZX08L2Rpdj5cbiAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9e2FsdGVyblRleHR9IC8+XG4gIDxkaXYgY2xhc3M9XCJpbmZvc1wiPlxuICAgIDxwPjxhIGhyZWY9e3NsdWd9IGNsYXNzPVwibGlua1wiPntpbmZvc308L2E+PC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5teVNsaWRlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICAubnVtYmVydGV4dCB7XG4gICAgY29sb3I6IHJnYigyMjgsIDQ2LCAyNDUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA4NXZoO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmluZm9zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmluZm9zIHAge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYigyMjgsIDQ2LCAyNDUpO1xuICB9XG4gIC5saW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAgc29saWQgIHJnYigyMjgsIDQ2LCAyNDUpO1xuICAgIGJvcmRlci1yaWdodDogIHNvbGlkICByZ2IoMjI4LCA0NiwgMjQ1KTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAubXlTbGlkZXMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIH1cbiAgICAuc2hvdyB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gICAgfVxuICAgIC5pbmZvcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5pbmZvcyBwe1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gIH1cbiAgLmxpbmt7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgYXtcbiAgICBmb250LXNpemU6MS4ycmVtO1xuICB9XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgICBpbXBvcnQgU2xpZGUgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9TbGlkZS5zdmVsdGVcIjtcbiBjb25zdCBpbWFnZVF1ZXJ5ID0gZ3FsYFxuICAgcXVlcnkgY292ZXJ7XG4gICAgIHByb2pldHMoc29ydDpcImRhdGU6ZGVzY1wiKXtcbiAgICAgICBpZFxuICAgICAgIGlkUFxuICAgICAgIHRpdHJlXG4gICAgICAgY292ZXIge1xuICAgICAgICAgdXJsXG4gICAgICAgfVxuICAgICAgIFNsdWdcbiAgICAgfVxuICAgfVxuIGA7XG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgdXJpOiBcImh0dHBzOi8vZ3JsZGZhdXJlLnh5ei9ncmFwaHFsXCIsXG4gICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG4gICB9KTtcbiAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICBxdWVyeTogaW1hZ2VRdWVyeSxcbiAgIH0pO1xuICAgcmV0dXJuIHsgcHJlc2VudGF0aW9uOiByZXN1bHRzLmRhdGEucHJvamV0cyB9O1xufVxuXG4gY29uc3QgdXJscEFwaSA9IFwiaHR0cHM6Ly9ncmxkZmF1cmUueHl6XCI7XG4gY29uc3QgdXJsU2x1ZyA9IFwicHJvamV0L1wiO1xuICAgXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgIGV4cG9ydCBsZXQgcHJlc2VudGF0aW9uO1xuLy8gc2xpZGVzaG93IGNoYW5nZSBpbWFnZVx0XG5sZXQgaW1hZ2VTaG93SW5kZXggPSAxO1xuIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICAgaWYoaW1hZ2VTaG93SW5kZXggPT09IDEgKXtcbiAgICAgICAgaW1hZ2VTaG93SW5kZXggPSBwcmVzZW50YXRpb24ubGVuZ3RoO1xuICAgICB9ZWxzZXtcbiAgICAgICBpbWFnZVNob3dJbmRleCAtPSAxO1xuICAgICB9XG4gICB9O1xuIFxuIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICAgaWYgKGltYWdlU2hvd0luZGV4ID09PSBwcmVzZW50YXRpb24ubGVuZ3RoKXtcbiAgICAgICAgIGltYWdlU2hvd0luZGV4ID0gMVxuICAgICB9ZWxzZXtcbiAgICAgICBpbWFnZVNob3dJbmRleCArPSAxO1xuICAgICB9XG4gICB9IDtcbjwvc2NyaXB0PlxuPGRpdj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbnsjZWFjaCBwcmVzZW50YXRpb24gYXMgcG9zdH1cbiA8U2xpZGUgaW1hZ2VVcmw9e3VybHBBcGkgKyBwb3N0LmNvdmVyLnVybH0gXG4gICAgICAgICAgYWx0ZXJuVGV4dD17cG9zdC50aXRyZX0gXG4gICAgICAgICAgc2xpZGVObz17aW1hZ2VTaG93SW5kZXh9XG4gICAgICAgICAgdG90YWxTbGlkZT17cHJlc2VudGF0aW9uLmxlbmd0aH1cbiAgICAgICAgICBpbWFnZVNob3dpbmc9eyhwb3N0LmlkUCAqIC0xKSArIHByZXNlbnRhdGlvbi5sZW5ndGggKyAxID09PSBpbWFnZVNob3dJbmRleH1cbiAgICAgICAgICBpbmZvcz17cG9zdC50aXRyZX1cbiAgICAgICAgICBzbHVnPXt1cmxTbHVnICsgcG9zdC5TbHVnfVxuICAgICAgICAgIC8+XG57L2VhY2h9XG48L2Rpdj5cbjwhLS0gTmV4dCBhbmQgcHJldmlvdXMgYnV0dG9ucyAtLT5cbjxhIGhyZWY9XCJibGFzdC8jYXJyb3dMXCIgY2xhc3M9XCJwcmV2XCIgb246Y2xpY2s9e3ByZXZTbGlkZX0+JiMxMDA5NDs8L2E+XG48YSBocmVmPVwiYmxhc3QvI2Fycm93UlwiIGNsYXNzPVwibmV4dFwiIG9uOmNsaWNrPXtuZXh0U2xpZGV9PiYjMTAwOTU7PC9hPlxuPC9kaXY+XG5cbjxzdHlsZT5cbi5jb250YWluZXIge1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xuLnByZXYsXG4ubmV4dCB7XG4gY3Vyc29yOiBwb2ludGVyO1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiB0b3A6IDQwJTtcbiB3aWR0aDogYXV0bztcbiBwYWRkaW5nOiAyMHB4O1xuIG1hcmdpbi1sZWZ0OiAyMHB4O1xuIGNvbG9yOiByZ2IoMjI4LCA0NiwgMjQ1KTtcbiBmb250LXdlaWdodDogYm9sZDtcbiBmb250LXNpemU6IDI1cHg7XG4gYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gdXNlci1zZWxlY3Q6IG5vbmU7XG4gLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn0gXG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gcmlnaHQ6IDA7XG4gbWFyZ2luLXJpZ2h0OiAyMHB4O1xuIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufSBcblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5wcmV2OmhvdmVyLFxuLm5leHQ6aG92ZXIge1xuICAgZm9udC1zaXplOiAzMHB4O1xufSBcbkBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgIC5wcmV2e1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI2Nyk7XG4gICAgfVxuICAgIC5uZXh0e1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yNjcpO1xuICAgIH1cbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBVzJCLEdBQU87OzRCQUFLLEdBQVU7Ozs7Ozs7dUJBR2IsR0FBSzs7Ozs7Ozs7MkNBSGQsR0FBTzs7OENBQUssR0FBVTs7Ozs7Ozs7Ozs7c0NBR2IsR0FBSzs7Ozs7Ozs7OztpREFGN0IsR0FBUTt1Q0FBTyxHQUFVOzs7Z0NBRXJCLEdBQUk7Ozs7Ozs7OytDQUpjLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFDbkIsR0FBTztpRUFBSyxHQUFVOzsyRUFDckMsR0FBUTs7Ozs7d0NBQU8sR0FBVTs7O3dEQUVELEdBQUs7OztpQ0FBekIsR0FBSTs7OztnREFKYyxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FUakMsUUFBUTtPQUNSLFVBQVU7T0FDVixPQUFPO09BQ1AsVUFBVTtPQUNWLFlBQVk7T0FDWixLQUFLO09BQ0wsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0NnREMsT0FBTyxZQUFHLEdBQUksSUFBQyxLQUFLLENBQUMsR0FBRzt5QkFDcEIsR0FBSSxJQUFDLEtBQUs7Z0NBQ2IsR0FBYztpQ0FDWCxHQUFZLElBQUMsTUFBTTsyQkFDaEIsR0FBSSxJQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFJLEdBQVksSUFBQyxNQUFNLEdBQUcsQ0FBQyx3QkFBSyxHQUFjO29CQUNuRSxHQUFJLElBQUMsS0FBSztVQUNYLE9BQU8sWUFBRyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQU5qQixPQUFPLFlBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxHQUFHO3VFQUNwQixHQUFJLElBQUMsS0FBSztnRkFDYixHQUFjOytFQUNYLEdBQVksSUFBQyxNQUFNO3lGQUNoQixHQUFJLElBQUMsR0FBRyxJQUFJLENBQUMsb0JBQUksR0FBWSxJQUFDLE1BQU0sR0FBRyxDQUFDLHdCQUFLLEdBQWM7a0VBQ25FLEdBQUksSUFBQyxLQUFLO3dEQUNYLE9BQU8sWUFBRyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FQNUIsR0FBWTs7OztnQ0FBakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQVl5QyxHQUFTOzJDQUNULEdBQVM7Ozs7Ozs7O2tDQWJqRCxHQUFZOzs7OytCQUFqQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW5EQyxVQUFVLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7ZUFhQSxPQUFPO09BQ3JCLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsK0JBQStCO0dBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWYsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxVQUFVO1VBRVYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTzs7O01BR3ZDLE9BQU8sR0FBRyx1QkFBdUI7TUFDakMsT0FBTyxHQUFHLFNBQVM7Ozs7O09BS1osWUFBWTs7O0tBRXRCLGNBQWMsR0FBRyxDQUFDOztPQUNmLFNBQVM7TUFDUixjQUFjLEtBQUssQ0FBQzttQkFDcEIsY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNOzttQkFFckMsY0FBYyxJQUFJLENBQUM7Ozs7T0FJbkIsU0FBUztNQUNQLGNBQWMsS0FBSyxZQUFZLENBQUMsTUFBTTttQkFDdEMsY0FBYyxHQUFHLENBQUM7O21CQUVwQixjQUFjLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
