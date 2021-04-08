import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, z as text, y as query_selector_all, g as claim_element, j as detach_dev, f as claim_space, h as children, A as claim_text, k as attr_dev, l as add_location, o as append_dev, n as insert_dev, D as set_data_dev, p as noop, H as HtmlTag } from './client.662f0e2c.js';
import { t } from './snarkdown.es.257e5e6b.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/cgvcgu/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/cgvcgu/index.svelte";

function create_fragment(ctx) {
	let meta;
	let t0;
	let div;
	let h1;
	let t1_value = /*cgu*/ ctx[0].titre + "";
	let t1;
	let t2;
	let html_tag;
	let raw_value = t(/*cgu*/ ctx[0].conditions) + "";

	const block = {
		c: function create() {
			meta = element("meta");
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-7w8by5\"]", document.head);
			meta = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta, "name", "robots");
			attr_dev(meta, "content", "noindex");
			add_location(meta, file, 30, 2, 566);
			document.title = "CGV/CGU";
			attr_dev(h1, "class", "svelte-1neoukf");
			add_location(h1, file, 35, 2, 672);
			html_tag = new HtmlTag(null);
			attr_dev(div, "class", "content svelte-1neoukf");
			add_location(div, file, 34, 0, 648);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			html_tag.m(raw_value, div);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*cgu*/ 1 && t1_value !== (t1_value = /*cgu*/ ctx[0].titre + "")) set_data_dev(t1, t1_value);
			if (dirty & /*cgu*/ 1 && raw_value !== (raw_value = t(/*cgu*/ ctx[0].conditions) + "")) html_tag.p(raw_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(meta);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
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

const cgvQuery = gql`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: cgvQuery });
	return { cgu: results.data.ccvCgu };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Cgvcgu", slots, []);
	let { cgu } = $$props;
	const writable_props = ["cgu"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cgvcgu> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("cgu" in $$props) $$invalidate(0, cgu = $$props.cgu);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		snarkdown: t,
		cgvQuery,
		preload,
		cgu
	});

	$$self.$inject_state = $$props => {
		if ("cgu" in $$props) $$invalidate(0, cgu = $$props.cgu);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [cgu];
}

class Cgvcgu extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { cgu: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cgvcgu",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*cgu*/ ctx[0] === undefined && !("cgu" in props)) {
			console.warn("<Cgvcgu> was created without expected prop 'cgu'");
		}
	}

	get cgu() {
		throw new Error("<Cgvcgu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set cgu(value) {
		throw new Error("<Cgvcgu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Cgvcgu;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzMzZWRkOGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY2d2Y2d1L2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbmltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuaW1wb3J0IHNuYXJrZG93biBmcm9tICdzbmFya2Rvd24nOyAgXG5cbmNvbnN0IGNndlF1ZXJ5ID0gZ3FsYFxuXHRxdWVyeSBjZ3Yge1xuICAgICAgICBjY3ZDZ3UoaWQ6XCIxXCIpe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdHJlXG4gICAgICAgICAgICBjb25kaXRpb25zXG4gICAgICB9XG4gICAgfSAgIFxuICBgO1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcblx0Y29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG5cdCAgdXJpOiBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXovZ3JhcGhxbFwiLFxuXHQgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG5cdH0pO1xuXHRjb25zdCByZXN1bHRzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcblx0ICBxdWVyeTogY2d2UXVlcnksXG5cdH0pO1xuXHRyZXR1cm4geyBjZ3U6IHJlc3VsdHMuZGF0YS5jY3ZDZ3UgfTtcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgY2d1O1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgPHRpdGxlPkNHVi9DR1U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgPGgxPntjZ3UudGl0cmV9PC9oMT5cbiAge0BodG1sIHNuYXJrZG93bihjZ3UuY29uZGl0aW9ucyl9XG48L2Rpdj5cbjxzdHlsZT5cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOjUwcHg7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIH0gXG4gICAgIFxuPC9zdHlsZT4iXSwibmFtZXMiOlsic25hcmtkb3duIiwiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBbUNPLEdBQUcsSUFBQyxLQUFLOzs7O2lCQUNQQSxDQUFTLFNBQUMsR0FBRyxJQUFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFEMUIsR0FBRyxJQUFDLEtBQUs7dURBQ1BBLENBQVMsU0FBQyxHQUFHLElBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWhDM0IsUUFBUSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7ZUFTSSxPQUFPO09BQ3hCLE1BQU0sT0FBT0MsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWYsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxRQUFRO1VBRVIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7O09BS25CLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
