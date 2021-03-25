import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, l as children, b as detach_dev, f as claim_space, m as claim_text, g as attr_dev, h as add_location, y as toggle_class, k as insert_dev, j as append_dev, w as set_data_dev, n as noop, r as validate_each_argument, F as create_component, G as claim_component, I as mount_component, B as transition_in, C as transition_out, J as destroy_component, q as query_selector_all, A as listen_dev, D as check_outros, x as destroy_each, E as run_all, K as group_outros } from './client.52f2bc4b.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/components/Slide.svelte generated by Svelte v3.35.0 */

const file$1 = "src/components/Slide.svelte";

function create_fragment$1(ctx) {
	let div1;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let p;
	let a1;
	let t1;

	const block = {
		c: function create() {
			div1 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			div0 = element("div");
			p = element("p");
			a1 = element("a");
			t1 = text(/*infos*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			a1 = claim_element(p_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t1 = claim_text(a1_nodes, /*infos*/ ctx[3]);
			a1_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*imageUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alternText*/ ctx[1]);
			attr_dev(img, "class", "svelte-1p5qie6");
			add_location(img, file$1, 9, 33, 218);
			attr_dev(a0, "href", /*slug*/ ctx[4]);
			attr_dev(a0, "class", "imgLink svelte-1p5qie6");
			add_location(a0, file$1, 9, 2, 187);
			attr_dev(a1, "href", /*slug*/ ctx[4]);
			attr_dev(a1, "class", "link svelte-1p5qie6");
			add_location(a1, file$1, 11, 7, 291);
			add_location(p, file$1, 11, 4, 288);
			attr_dev(div0, "class", "infos svelte-1p5qie6");
			add_location(div0, file$1, 10, 2, 264);
			attr_dev(div1, "class", "mySlides svelte-1p5qie6");
			toggle_class(div1, "show", /*imageShowing*/ ctx[2]);
			add_location(div1, file$1, 8, 0, 134);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, a0);
			append_dev(a0, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, p);
			append_dev(p, a1);
			append_dev(a1, t1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*imageUrl*/ 1 && img.src !== (img_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alternText*/ 2) {
				attr_dev(img, "alt", /*alternText*/ ctx[1]);
			}

			if (dirty & /*slug*/ 16) {
				attr_dev(a0, "href", /*slug*/ ctx[4]);
			}

			if (dirty & /*infos*/ 8) set_data_dev(t1, /*infos*/ ctx[3]);

			if (dirty & /*slug*/ 16) {
				attr_dev(a1, "href", /*slug*/ ctx[4]);
			}

			if (dirty & /*imageShowing*/ 4) {
				toggle_class(div1, "show", /*imageShowing*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
	let { imageShowing } = $$props;
	let { infos } = $$props;
	let { slug } = $$props;
	const writable_props = ["imageUrl", "alternText", "imageShowing", "infos", "slug"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Slide> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("imageShowing" in $$props) $$invalidate(2, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(3, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(4, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({
		imageUrl,
		alternText,
		imageShowing,
		infos,
		slug
	});

	$$self.$inject_state = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("imageShowing" in $$props) $$invalidate(2, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(3, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(4, slug = $$props.slug);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [imageUrl, alternText, imageShowing, infos, slug];
}

class Slide extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			imageUrl: 0,
			alternText: 1,
			imageShowing: 2,
			infos: 3,
			slug: 4
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

		if (/*imageShowing*/ ctx[2] === undefined && !("imageShowing" in props)) {
			console.warn("<Slide> was created without expected prop 'imageShowing'");
		}

		if (/*infos*/ ctx[3] === undefined && !("infos" in props)) {
			console.warn("<Slide> was created without expected prop 'infos'");
		}

		if (/*slug*/ ctx[4] === undefined && !("slug" in props)) {
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

// (63:0) {#each presentation as post}
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
		source: "(63:0) {#each presentation as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let meta;
	let t0;
	let div1;
	let div0;
	let t1;
	let a0;
	let t2;
	let t3;
	let a1;
	let t4;
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
			meta = element("meta");
			t0 = space();
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			a0 = element("a");
			t2 = text("❮");
			t3 = space();
			a1 = element("a");
			t4 = text("❯");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v2yckq\"]", document.head);
			meta = claim_element(head_nodes, "META", { description: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "❮");
			a0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "❯");
			a1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta, "description", "Présentaion des différents projets réalisés par le collectif Blastart, comme l'expositions unique le\n  terminal, le dinosaure Gustave de Romain Lardanchet et la fresque monumentale Gorilla urbaine réalisé par Kalouf. Ces \n  travaux sont rendus au travers des photos de FabeCollage et des vidéos de Jean-Pierre(staffvidéo)");
			add_location(meta, file, 54, 2, 1100);
			document.title = "Projets réalisés par le collectif Blastart. Fresques, graphes sculptures les artistes relèvent tous les défis";
			attr_dev(div0, "class", "container svelte-1pa3brs");
			add_location(div0, file, 61, 0, 1594);
			attr_dev(a0, "href", "blast/#arrowL");
			attr_dev(a0, "class", "prev svelte-1pa3brs");
			add_location(a0, file, 74, 0, 2020);
			attr_dev(a1, "href", "blast/#arrowR");
			attr_dev(a1, "class", "next svelte-1pa3brs");
			add_location(a1, file, 75, 0, 2091);
			add_location(div1, file, 60, 0, 1588);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div1, t1);
			append_dev(div1, a0);
			append_dev(a0, t2);
			append_dev(div1, t3);
			append_dev(div1, a1);
			append_dev(a1, t4);
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
			detach_dev(meta);
			if (detaching) detach_dev(t0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMWJiMDc1MWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxhc3QvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaW1hZ2VVcmw7XG4gIGV4cG9ydCBsZXQgYWx0ZXJuVGV4dDtcbiAgZXhwb3J0IGxldCBpbWFnZVNob3dpbmc7XG4gIGV4cG9ydCBsZXQgaW5mb3M7XG4gIGV4cG9ydCBsZXQgc2x1Zztcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwibXlTbGlkZXNcIiAgY2xhc3M6c2hvdz17aW1hZ2VTaG93aW5nfSA+XG4gIDxhIGhyZWY9e3NsdWd9IGNsYXNzPVwiaW1nTGlua1wiPjxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PXthbHRlcm5UZXh0fSAvPjwvYT5cbiAgPGRpdiBjbGFzcz1cImluZm9zXCI+XG4gICAgPHA+PGEgaHJlZj17c2x1Z30gY2xhc3M9XCJsaW5rXCI+e2luZm9zfTwvYT48L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLm15U2xpZGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICBcbiBhIGltZyB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICAuaW1nTGlua3tcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAuaW5mb3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI2VmMTFhMTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgLm15U2xpZGVzIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgLnNob3cge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgIH1cbiAgICBcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuICAgIGltcG9ydCBTbGlkZSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL1NsaWRlLnN2ZWx0ZVwiO1xuIGNvbnN0IGltYWdlUXVlcnkgPSBncWxgXG4gICBxdWVyeSBjb3ZlcntcbiAgICAgcHJvamV0cyhzb3J0OlwiZGF0ZTpkZXNjXCIpe1xuICAgICAgIGlkXG4gICAgICAgaWRQXG4gICAgICAgdGl0cmVcbiAgICAgICBjb3ZlciB7XG4gICAgICAgICB1cmxcbiAgICAgICB9XG4gICAgICAgU2x1Z1xuICAgICB9XG4gICB9XG4gYDtcbiBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICB1cmk6IFwiaHR0cHM6Ly9ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgIH0pO1xuICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgIHF1ZXJ5OiBpbWFnZVF1ZXJ5LFxuICAgfSk7XG4gICByZXR1cm4geyBwcmVzZW50YXRpb246IHJlc3VsdHMuZGF0YS5wcm9qZXRzIH07XG59XG5cbiBjb25zdCB1cmxwQXBpID0gXCJodHRwczovL2dybGRmYXVyZS54eXpcIjtcbiBjb25zdCB1cmxTbHVnID0gXCJwcm9qZXQvXCI7XG4gICBcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgZXhwb3J0IGxldCBwcmVzZW50YXRpb247XG4vLyBzbGlkZXNob3cgY2hhbmdlIGltYWdlXHRcbmxldCBpbWFnZVNob3dJbmRleCA9IDE7XG4gY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgICBpZihpbWFnZVNob3dJbmRleCA9PT0gMSApe1xuICAgICAgICBpbWFnZVNob3dJbmRleCA9IHByZXNlbnRhdGlvbi5sZW5ndGg7XG4gICAgIH1lbHNle1xuICAgICAgIGltYWdlU2hvd0luZGV4IC09IDE7XG4gICAgIH1cbiAgIH07XG4gXG4gY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgICBpZiAoaW1hZ2VTaG93SW5kZXggPT09IHByZXNlbnRhdGlvbi5sZW5ndGgpe1xuICAgICAgICAgaW1hZ2VTaG93SW5kZXggPSAxXG4gICAgIH1lbHNle1xuICAgICAgIGltYWdlU2hvd0luZGV4ICs9IDE7XG4gICAgIH1cbiAgIH0gO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPG1ldGEgZGVzY3JpcHRpb249XCJQcsOpc2VudGFpb24gZGVzIGRpZmbDqXJlbnRzIHByb2pldHMgcsOpYWxpc8OpcyBwYXIgbGUgY29sbGVjdGlmIEJsYXN0YXJ0LCBjb21tZSBsJ2V4cG9zaXRpb25zIHVuaXF1ZSBsZVxuICB0ZXJtaW5hbCwgbGUgZGlub3NhdXJlIEd1c3RhdmUgZGUgUm9tYWluIExhcmRhbmNoZXQgZXQgbGEgZnJlc3F1ZSBtb251bWVudGFsZSBHb3JpbGxhIHVyYmFpbmUgcsOpYWxpc8OpIHBhciBLYWxvdWYuIENlcyBcbiAgdHJhdmF1eCBzb250IHJlbmR1cyBhdSB0cmF2ZXJzIGRlcyBwaG90b3MgZGUgRmFiZUNvbGxhZ2UgZXQgZGVzIHZpZMOpb3MgZGUgSmVhbi1QaWVycmUoc3RhZmZ2aWTDqW8pXCIgLz5cbiAgPHRpdGxlPlByb2pldHMgcsOpYWxpc8OpcyBwYXIgbGUgY29sbGVjdGlmIEJsYXN0YXJ0LiBGcmVzcXVlcywgZ3JhcGhlcyBzY3VscHR1cmVzIGxlcyBhcnRpc3RlcyByZWzDqHZlbnQgdG91cyBsZXMgZMOpZmlzPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXY+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG57I2VhY2ggcHJlc2VudGF0aW9uIGFzIHBvc3R9XG4gPFNsaWRlIGltYWdlVXJsPXt1cmxwQXBpICsgcG9zdC5jb3Zlci51cmx9IFxuICAgICAgICAgIGFsdGVyblRleHQ9e3Bvc3QudGl0cmV9IFxuICAgICAgICAgIHNsaWRlTm89e2ltYWdlU2hvd0luZGV4fVxuICAgICAgICAgIHRvdGFsU2xpZGU9e3ByZXNlbnRhdGlvbi5sZW5ndGh9XG4gICAgICAgICAgaW1hZ2VTaG93aW5nPXsocG9zdC5pZFAgKiAtMSkgKyBwcmVzZW50YXRpb24ubGVuZ3RoICsgMSA9PT0gaW1hZ2VTaG93SW5kZXh9XG4gICAgICAgICAgaW5mb3M9e3Bvc3QudGl0cmV9XG4gICAgICAgICAgc2x1Zz17dXJsU2x1ZyArIHBvc3QuU2x1Z31cbiAgICAgICAgICAvPlxuey9lYWNofVxuPC9kaXY+XG48IS0tIE5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnMgLS0+XG48YSBocmVmPVwiYmxhc3QvI2Fycm93TFwiIGNsYXNzPVwicHJldlwiIG9uOmNsaWNrPXtwcmV2U2xpZGV9PiYjMTAwOTQ7PC9hPlxuPGEgaHJlZj1cImJsYXN0LyNhcnJvd1JcIiBjbGFzcz1cIm5leHRcIiBvbjpjbGljaz17bmV4dFNsaWRlfT4mIzEwMDk1OzwvYT5cbjwvZGl2PlxuXG48c3R5bGU+XG4uY29udGFpbmVyIHtcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuIGN1cnNvcjogcG9pbnRlcjtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiA0MCU7XG4gd2lkdGg6IGF1dG87XG4gcGFkZGluZzogMjBweDtcbiBtYXJnaW4tbGVmdDogMjBweDtcbiBjb2xvcjogI2VmMTFhMTtcbiBmb250LXdlaWdodDogYm9sZDtcbiBmb250LXNpemU6IDI1cHg7XG4gYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gdXNlci1zZWxlY3Q6IG5vbmU7XG4gLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn0gXG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gcmlnaHQ6IDA7XG4gbWFyZ2luLXJpZ2h0OiAyMHB4O1xuIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufSBcblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5wcmV2OmhvdmVyLFxuLm5leHQ6aG92ZXIge1xuICAgZm9udC1zaXplOiAzMHB4O1xufSBcbkBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgIC5wcmV2e1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI2Nyk7XG4gICAgfVxuICAgIC5uZXh0e1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yNjcpO1xuICAgIH1cbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVdvQyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7OztpREFGRSxHQUFRO3VDQUFPLEdBQVU7OztpQ0FBekQsR0FBSTs7O2lDQUVDLEdBQUk7Ozs7Ozs7K0NBSGUsR0FBWTs7Ozs7Ozs7Ozs7Ozs7MkVBQ0osR0FBUTs7Ozs7d0NBQU8sR0FBVTs7OztrQ0FBekQsR0FBSTs7O3VEQUVxQixHQUFLOzs7a0NBQXpCLEdBQUk7Ozs7Z0RBSGUsR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BUGxDLFFBQVE7T0FDUixVQUFVO09BQ1YsWUFBWTtPQUNaLEtBQUs7T0FDTCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0MwREMsT0FBTyxZQUFHLEdBQUksSUFBQyxLQUFLLENBQUMsR0FBRzt5QkFDcEIsR0FBSSxJQUFDLEtBQUs7Z0NBQ2IsR0FBYztpQ0FDWCxHQUFZLElBQUMsTUFBTTsyQkFDaEIsR0FBSSxJQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFJLEdBQVksSUFBQyxNQUFNLEdBQUcsQ0FBQyx3QkFBSyxHQUFjO29CQUNuRSxHQUFJLElBQUMsS0FBSztVQUNYLE9BQU8sWUFBRyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQU5qQixPQUFPLFlBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxHQUFHO3VFQUNwQixHQUFJLElBQUMsS0FBSztnRkFDYixHQUFjOytFQUNYLEdBQVksSUFBQyxNQUFNO3lGQUNoQixHQUFJLElBQUMsR0FBRyxJQUFJLENBQUMsb0JBQUksR0FBWSxJQUFDLE1BQU0sR0FBRyxDQUFDLHdCQUFLLEdBQWM7a0VBQ25FLEdBQUksSUFBQyxLQUFLO3dEQUNYLE9BQU8sWUFBRyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQVA1QixHQUFZOzs7O2dDQUFqQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FZeUMsR0FBUzsyQ0FDVCxHQUFTOzs7Ozs7OztrQ0FiakQsR0FBWTs7OzsrQkFBakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBSixNQUFJOzs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTNEQyxVQUFVLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7ZUFhQSxPQUFPO09BQ3JCLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsK0JBQStCO0dBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWYsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxVQUFVO1VBRVYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTzs7O01BR3ZDLE9BQU8sR0FBRyx1QkFBdUI7TUFDakMsT0FBTyxHQUFHLFNBQVM7Ozs7O09BS1osWUFBWTs7O0tBRXRCLGNBQWMsR0FBRyxDQUFDOztPQUNmLFNBQVM7TUFDUixjQUFjLEtBQUssQ0FBQzttQkFDcEIsY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNOzttQkFFckMsY0FBYyxJQUFJLENBQUM7Ozs7T0FJbkIsU0FBUztNQUNQLGNBQWMsS0FBSyxZQUFZLENBQUMsTUFBTTttQkFDdEMsY0FBYyxHQUFHLENBQUM7O21CQUVwQixjQUFjLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
