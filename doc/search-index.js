var searchIndex = {};
searchIndex['itertools'] = {"items":[[0,"","itertools","Itertools — extra iterator adaptors, functions and macros.",null,null],[3,"Interleave","","An iterator adaptor that alternates elements from two iterators until both\nrun out.",null,null],[3,"InterleaveShortest","","An iterator adaptor that alternates elements from the two iterators until\none of them runs out.",null,null],[3,"Product","","An iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators `I` and `J`.",null,null],[3,"PutBack","","An iterator adaptor that allows putting back a single\nitem to the front of the iterator.",null,null],[3,"PutBackN","","An iterator adaptor that allows putting multiple\nitems in front of the iterator.",null,null],[3,"FnMap","","**Deprecated:** Use *.map_fn()* instead.",null,null],[3,"Batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",null,null],[3,"GroupBy","","An iterator adaptor that groups iterator elements. Consecutive elements\nthat map to the same key (“runs”), are returned as the iterator elements.",null,null],[3,"Step","","An iterator adaptor that steps a number elements in the base iterator\nfor each iteration.",null,null],[3,"Merge","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MultiPeek","","An iterator adaptor that allows the user to peek at multiple *.next()*\nvalues without advancing itself.",null,null],[3,"TakeWhileRef","","An iterator adaptor that borrows from a `Clone`-able iterator\nto only pick off elements while the predicate returns `true`.",null,null],[3,"WhileSome","","An iterator adaptor that filters `Option<A>` iterator elements\nand produces `A`. Stops on the first `None` encountered.",null,null],[3,"Coalesce","","An iterator adaptor that may join together adjacent elements.",null,null],[3,"Combinations","","An iterator to iterate through all the combinations of pairs in a `Clone`-able iterator.",null,null],[3,"UniqueBy","","An iterator adapter to filter out duplicate elements.",null,null],[3,"Format","","Format all iterator elements lazily, separated by `sep`.",null,null],[3,"ChunksLazy","","`ChunkLazy` is the storage for a lazy chunking operation.",null,null],[3,"Chunk","","An iterator for the elements in a single chunk.",null,null],[3,"Chunks","","An iterator that yields the Chunk iterators.",null,null],[3,"GroupByLazy","","`GroupByLazy` is the storage for the lazy grouping operation.",null,null],[3,"Group","","An iterator for the elements in a single group.",null,null],[3,"Groups","","An iterator that yields the Group iterators.",null,null],[3,"Intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",null,null],[3,"ISlice","","An iterator adaptor that yields a subset (a slice) of the base iterator.",null,null],[3,"PadUsing","","An iterator adaptor that pads a sequence to a minimum length by filling\nmissing elements using a closure.",null,null],[3,"RepeatN","","An iterator that repeats an element exactly *n* times.",null,null],[3,"RcIter","","A wrapper for `Rc<RefCell<I>>`, that implements the `Iterator` trait.",null,null],[12,"rciter","","The boxed iterator.",0,null],[3,"Stride","","An iterator similar to the slice iterator, but with a certain number of steps\n(the stride) skipped per iteration.",null,null],[3,"StrideMut","","The mutable equivalent of Stride.",null,null],[3,"Tee","","One half of an iterator pair where both return the same elements.",null,null],[3,"Times","","A simple iterator to repeat a given number of times",null,null],[3,"Linspace","","An iterator of a sequence of evenly spaced floats.",null,null],[3,"RepeatCall","","An iterator source that produces elements indefinitely by calling\na given closure.",null,null],[3,"Unfold","","`Unfold` is a general iterator builder: it has a mutable state value,\nand a closure with access to the state that produces the next value.",null,null],[12,"state","","Internal state that will be passed to the closure on the next iteration",1,null],[3,"ZipLongest","","An iterator which iterates two other iterators simultaneously",null,null],[3,"Zip","","An iterator that generalizes *.zip()* and allows running multiple iterators in lockstep.",null,null],[3,"ZipSlices","","An iterator which iterates two slices simultaneously.",null,null],[4,"EitherOrBoth","","A value yielded by `ZipLongest`.\nContains one or two values, depending on which of the input iterators are exhausted.",null,null],[13,"Both","","Neither input iterator is exhausted yet, yielding two values.",2,null],[13,"Left","","The parameter iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the `self` iterator.",2,null],[13,"Right","","The `self` iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the parameter iterator.",2,null],[5,"times","","Return an iterator with `n` elements, for simple repetition\na particular number of times. The iterator yields a counter.",null,{"inputs":[{"name":"usize"}],"output":{"name":"times"}}],[5,"linspace","","Return an iterator of evenly spaced floats.",null,{"inputs":[{"name":"f"},{"name":"f"},{"name":"usize"}],"output":{"name":"linspace"}}],[5,"equal","","Return `true` if both iterators produce equal sequences\n(elements pairwise equal and sequences of the same length),\n`false` otherwise.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"bool"}}],[5,"assert_equal","","Assert that two iterators produce equal sequences, with the same\nsemantics as *equal(a, b)*.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":null}],[5,"partition","","Partition a sequence using predicate `pred` so that elements\nthat map to `true` are placed before elements which map to `false`.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"usize"}}],[11,"clone","","",3,{"inputs":[{"name":"interleave"}],"output":{"name":"interleave"}}],[11,"new","","Creat a new `Interleave` iterator.",3,{"inputs":[{"name":"interleave"},{"name":"i"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"next","","",3,{"inputs":[{"name":"interleave"}],"output":{"name":"option"}}],[11,"clone","","",4,{"inputs":[{"name":"interleaveshortest"}],"output":{"name":"interleaveshortest"}}],[11,"new","","Create a new `InterleaveShortest` iterator.",4,{"inputs":[{"name":"interleaveshortest"},{"name":"i"},{"name":"j"}],"output":{"name":"interleaveshortest"}}],[11,"next","","",4,{"inputs":[{"name":"interleaveshortest"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"new","","**Deprecated:** Use *.map_fn()* instead.",5,null],[11,"next","","",5,{"inputs":[{"name":"fnmap"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next_back","","",5,{"inputs":[{"name":"fnmap"}],"output":{"name":"option"}}],[11,"clone","","",5,{"inputs":[{"name":"fnmap"}],"output":{"name":"self"}}],[11,"clone","","",6,{"inputs":[{"name":"putback"}],"output":{"name":"putback"}}],[11,"new","","Iterator element type is `A`",6,{"inputs":[{"name":"putback"},{"name":"i"}],"output":{"name":"self"}}],[11,"put_back","","Put back a single value to the front of the iterator.",6,{"inputs":[{"name":"putback"},{"name":"item"}],"output":null}],[11,"next","","",6,{"inputs":[{"name":"putback"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"new","","Iterator element type is `A`",7,{"inputs":[{"name":"putbackn"},{"name":"i"}],"output":{"name":"self"}}],[11,"put_back","","Puts x in front of the iterator.\nThe values are yielded in order.",7,{"inputs":[{"name":"putbackn"},{"name":"item"}],"output":null}],[11,"next","","",7,{"inputs":[{"name":"putbackn"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"clone","","",7,{"inputs":[{"name":"putbackn"}],"output":{"name":"self"}}],[11,"clone","","",8,{"inputs":[{"name":"product"}],"output":{"name":"product"}}],[11,"new","","Create a new cartesian product iterator",8,{"inputs":[{"name":"product"},{"name":"i"},{"name":"j"}],"output":{"name":"self"}}],[11,"next","","",8,{"inputs":[{"name":"product"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"clone","","",9,{"inputs":[{"name":"batching"}],"output":{"name":"batching"}}],[11,"new","","Create a new Batching iterator.",9,{"inputs":[{"name":"batching"},{"name":"i"},{"name":"f"}],"output":{"name":"batching"}}],[11,"next","","",9,{"inputs":[{"name":"batching"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"clone","","",10,{"inputs":[{"name":"groupby"}],"output":{"name":"groupby"}}],[11,"new","","Create a new `GroupBy` iterator.",10,{"inputs":[{"name":"groupby"},{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",10,{"inputs":[{"name":"groupby"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"clone","","",11,{"inputs":[{"name":"step"}],"output":{"name":"step"}}],[11,"new","","Create a `Step` iterator.",11,{"inputs":[{"name":"step"},{"name":"i"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",11,{"inputs":[{"name":"step"}],"output":{"name":"option"}}],[11,"size_hint","","",11,null],[11,"new","","Create a `Merge` iterator.",12,{"inputs":[{"name":"merge"},{"name":"i"},{"name":"j"},{"name":"f"}],"output":{"name":"self"}}],[11,"clone","","",12,{"inputs":[{"name":"merge"}],"output":{"name":"self"}}],[11,"next","","",12,{"inputs":[{"name":"merge"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"clone","","",13,{"inputs":[{"name":"multipeek"}],"output":{"name":"multipeek"}}],[11,"new","","Create a `MultiPeek` iterator.",13,{"inputs":[{"name":"multipeek"},{"name":"i"}],"output":{"name":"multipeek"}}],[11,"peek","","Works exactly like *.next()* with the only difference that it doesn't\nadvance itself. *.peek()* can be called multiple times, to peek\nfurther ahead.",13,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"next","","",13,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"size_hint","","",13,null],[11,"clone","","",14,{"inputs":[{"name":"coalesce"}],"output":{"name":"coalesce"}}],[11,"new","","Create a new `Coalesce`.",14,{"inputs":[{"name":"coalesce"},{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",14,{"inputs":[{"name":"coalesce"}],"output":{"name":"option"}}],[11,"size_hint","","",14,null],[11,"new","","Create a new `TakeWhileRef` from a reference to clonable iterator.",15,{"inputs":[{"name":"takewhileref"},{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",15,{"inputs":[{"name":"takewhileref"}],"output":{"name":"option"}}],[11,"size_hint","","",15,null],[11,"clone","","",16,{"inputs":[{"name":"whilesome"}],"output":{"name":"whilesome"}}],[11,"new","","Create a new `WhileSome<I>`.",16,{"inputs":[{"name":"whilesome"},{"name":"i"}],"output":{"name":"self"}}],[11,"next","","",16,{"inputs":[{"name":"whilesome"}],"output":{"name":"option"}}],[11,"size_hint","","",16,null],[11,"clone","","",17,{"inputs":[{"name":"combinations"}],"output":{"name":"combinations"}}],[11,"new","","Create a new `Combinations` from a clonable iterator.",17,{"inputs":[{"name":"combinations"},{"name":"i"}],"output":{"name":"combinations"}}],[11,"next","","",17,{"inputs":[{"name":"combinations"}],"output":{"name":"option"}}],[11,"size_hint","","",17,null],[11,"clone","","",18,{"inputs":[{"name":"uniqueby"}],"output":{"name":"uniqueby"}}],[11,"new","","Create a new `UniqueBy` iterator.",18,{"inputs":[{"name":"uniqueby"},{"name":"i"},{"name":"f"}],"output":{"name":"uniqueby"}}],[11,"next","","",18,{"inputs":[{"name":"uniqueby"}],"output":{"name":"option"}}],[11,"size_hint","","",18,null],[11,"fmt","","",19,{"inputs":[{"name":"format"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",20,{"inputs":[{"name":"groups"}],"output":{"name":"option"}}],[11,"drop","","",21,{"inputs":[{"name":"group"}],"output":null}],[11,"next","","",21,{"inputs":[{"name":"group"}],"output":{"name":"option"}}],[11,"next","","",22,{"inputs":[{"name":"chunks"}],"output":{"name":"option"}}],[11,"drop","","",23,{"inputs":[{"name":"chunk"}],"output":null}],[11,"next","","",23,{"inputs":[{"name":"chunk"}],"output":{"name":"option"}}],[11,"clone","","",24,{"inputs":[{"name":"intersperse"}],"output":{"name":"intersperse"}}],[11,"new","","Create a new Intersperse iterator",24,{"inputs":[{"name":"intersperse"},{"name":"i"},{"name":"item"}],"output":{"name":"self"}}],[11,"next","","",24,{"inputs":[{"name":"intersperse"}],"output":{"name":"option"}}],[11,"size_hint","","",24,null],[11,"clone","","",25,{"inputs":[{"name":"islice"}],"output":{"name":"islice"}}],[11,"new","","Create a new **ISlice**.",25,{"inputs":[{"name":"islice"},{"name":"i"},{"name":"r"}],"output":{"name":"self"}}],[11,"next","","",25,{"inputs":[{"name":"islice"}],"output":{"name":"option"}}],[11,"size_hint","","",25,null],[11,"next","","",26,{"inputs":[{"name":"linspace"}],"output":{"name":"option"}}],[11,"size_hint","","",26,null],[11,"next_back","","",26,{"inputs":[{"name":"linspace"}],"output":{"name":"option"}}],[0,"misc","","A module of helper traits and iterators that are not intended to be used\ndirectly.",null,null],[3,"FlatTuples","itertools::misc","A helper iterator that maps an iterator of tuples like\n`((A, B), C)` to an iterator of `(A, B, C)`.",null,null],[8,"IntoIteratorTuple","","Apply `IntoIterator` on each element of a tuple.",null,null],[16,"Output","","Tuple of values that implement `Iterator`.",27,null],[10,"into_iterator_tuple","","Return a tuple of iterators.",27,{"inputs":[{"name":"intoiteratortuple"}],"output":{"name":"output"}}],[8,"AppendTuple","","A helper trait for (x, y, z) ++ w => (x, y, z, w),\nused for implementing `iproduct!`.",null,null],[16,"Result","","Resulting tuple type",28,null],[10,"append","","“Append” value `x` to a tuple.",28,{"inputs":[{"name":"appendtuple"},{"name":"x"}],"output":{"name":"result"}}],[8,"GenericRange","","`GenericRange` is implemented by Rust's built-in range types, produced\nby range syntax like `a..`, `..b` or `c..d`.",null,null],[8,"ToFloat","","Helper trait to convert usize to floating point type.",null,null],[8,"MendSlice","","A trait for items that can *maybe* be joined together.",null,null],[8,"Slice","","A helper trait to let `ZipSlices` accept both `&[T]` and `&mut [T]`.",null,null],[16,"Item","","The type of a reference to the slice's elements",29,null],[11,"clone","","",30,{"inputs":[{"name":"flattuples"}],"output":{"name":"flattuples"}}],[11,"next","","",30,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"size_hint","","",30,null],[11,"next_back","","",30,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"start","core::ops","",31,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",32,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",33,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",33,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"clone","itertools","",34,{"inputs":[{"name":"padusing"}],"output":{"name":"padusing"}}],[11,"new","","Create a new **PadUsing** iterator.",34,{"inputs":[{"name":"padusing"},{"name":"i"},{"name":"usize"},{"name":"f"}],"output":{"name":"padusing"}}],[11,"next","","",34,{"inputs":[{"name":"padusing"}],"output":{"name":"option"}}],[11,"size_hint","","",34,null],[11,"next_back","","",34,{"inputs":[{"name":"padusing"}],"output":{"name":"option"}}],[11,"new","","Create a new RcIter.",0,{"inputs":[{"name":"rciter"},{"name":"i"}],"output":{"name":"rciter"}}],[11,"clone","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"rciter"}}],[11,"next","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"size_hint","","",0,null],[11,"next_back","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"new","","Create a new **RepeatN** with **n** repetitions.",35,{"inputs":[{"name":"repeatn"},{"name":"a"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",35,{"inputs":[{"name":"repeatn"}],"output":{"name":"option"}}],[11,"size_hint","","",35,null],[11,"next_back","","",35,{"inputs":[{"name":"repeatn"}],"output":{"name":"option"}}],[11,"new","","Create a new `RepeatCall` from a closure.",36,{"inputs":[{"name":"repeatcall"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",36,{"inputs":[{"name":"repeatcall"}],"output":{"name":"option"}}],[11,"size_hint","","",36,null],[11,"next_back","","",36,{"inputs":[{"name":"repeatcall"}],"output":{"name":"option"}}],[11,"clone","","",1,{"inputs":[{"name":"unfold"}],"output":{"name":"unfold"}}],[11,"new","","Creates a new iterator with the specified closure as the \"iterator\nfunction\" and an initial state to eventually pass to the closure",1,{"inputs":[{"name":"unfold"},{"name":"st"},{"name":"f"}],"output":{"name":"unfold"}}],[11,"next","","",1,{"inputs":[{"name":"unfold"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[0,"size_hint","","Arithmetic on **Iterator** *.size_hint()* values.",null,null],[5,"add","itertools::size_hint","Add **SizeHint** correctly.",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"add_scalar","","Add **x** correctly to a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"sub_scalar","","Sbb **x** correctly to a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"mul_scalar","","Multiply **x** correctly with a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"mul","","Multiply **SizeHint** correctly",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"max","","Return the maximum",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"min","","Return the minimum",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[6,"SizeHint","","**SizeHint** is the return type of **Iterator::size_hint()**.",null,null],[11,"from_ptr_len","itertools","Create a Stride iterator from a raw pointer.",37,null],[11,"from_ptr_len","","Create a StrideMut iterator from a raw pointer.",38,null],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",37,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",37,{"inputs":[{"name":"stride"},{"name":"stride"},{"name":"isize"}],"output":{"name":"stride"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",37,{"inputs":[{"name":"stride"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",37,{"inputs":[{"name":"stride"}],"output":{"name":"usize"}}],[11,"next","","",37,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"size_hint","","",37,null],[11,"next_back","","",37,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",37,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",37,{"inputs":[{"name":"stride"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","",37,{"inputs":[{"name":"stride"}],"output":{"name":"usize"}}],[11,"get_unchecked","","",37,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"a"}}],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",38,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",38,{"inputs":[{"name":"stridemut"},{"name":"stridemut"},{"name":"isize"}],"output":{"name":"stridemut"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",38,{"inputs":[{"name":"stridemut"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",38,{"inputs":[{"name":"stridemut"}],"output":{"name":"usize"}}],[11,"next","","",38,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"size_hint","","",38,null],[11,"next_back","","",38,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",38,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",38,{"inputs":[{"name":"stridemut"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","",38,{"inputs":[{"name":"stridemut"}],"output":{"name":"usize"}}],[11,"get_unchecked","","",38,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"clone","","",37,{"inputs":[{"name":"stride"}],"output":{"name":"stride"}}],[11,"index_mut","","Return a mutable reference to the element at a given index.",38,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"next","","",39,{"inputs":[{"name":"tee"}],"output":{"name":"option"}}],[11,"size_hint","","",39,null],[11,"clone","","",40,{"inputs":[{"name":"times"}],"output":{"name":"times"}}],[11,"next","","",40,{"inputs":[{"name":"times"}],"output":{"name":"option"}}],[11,"size_hint","","",40,null],[11,"next_back","","",40,{"inputs":[{"name":"times"}],"output":{"name":"option"}}],[11,"clone","","",41,{"inputs":[{"name":"ziplongest"}],"output":{"name":"ziplongest"}}],[11,"new","","Create a new `ZipLongest` iterator.",41,{"inputs":[{"name":"ziplongest"},{"name":"t"},{"name":"u"}],"output":{"name":"ziplongest"}}],[11,"next","","",41,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"size_hint","","",41,null],[11,"next_back","","",41,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"eitherorboth"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"eitherorboth"}],"output":{"name":"eitherorboth"}}],[11,"clone","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"zip"}}],[11,"new","","Create a new `Zip` from a tuple of iterators.",42,{"inputs":[{"name":"zip"},{"name":"t"}],"output":{"name":"zip"}}],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"next","","",42,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",42,null],[11,"clone","","",43,{"inputs":[{"name":"zipslices"}],"output":{"name":"self"}}],[11,"new","","Create a new `ZipSlices` from slices `a` and `b`.",43,null],[11,"from_slices","","Create a new `ZipSlices` from slices `a` and `b`.",43,{"inputs":[{"name":"zipslices"},{"name":"t"},{"name":"u"}],"output":{"name":"self"}}],[11,"next","","",43,{"inputs":[{"name":"zipslices"}],"output":{"name":"option"}}],[11,"size_hint","","",43,null],[11,"next_back","","",43,{"inputs":[{"name":"zipslices"}],"output":{"name":"option"}}],[6,"CoalesceFn","","An iterator adaptor that may join together adjacent elements.",null,null],[6,"Unique","","An iterator adapter to filter out duplicate elements.",null,null],[6,"MapFn","","The function pointer map iterator created with `.map_fn()`.",null,null],[6,"MergeAscend","","An ascending order merge iterator created with `.merge()`.",null,null],[8,"Itertools","","The trait `Itertools`: extra iterator adaptors and methods for iterators.",null,null],[11,"interleave","","Alternate elements from two iterators until both\nrun out.",44,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"interleave_shortest","","Alternate elements from two iterators until one of them runs out.",44,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"interleaveshortest"}}],[11,"intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",44,{"inputs":[{"name":"itertools"},{"name":"item"}],"output":{"name":"intersperse"}}],[11,"zip_longest","","Create an iterator which iterates over both this and the specified\niterator simultaneously, yielding pairs of two optional elements.",44,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"ziplongest"}}],[11,"batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"batching"}}],[11,"group_by","","Group iterator elements. Consecutive elements that map to the same key (“runs”),\nare returned as the iterator elements of `GroupBy`.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"groupby"}}],[11,"group_by_lazy","","Return an iterable that can group iterator elements.\nConsecutive elements that map to the same key (“runs”), are assigned\nto the same group.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"groupbylazy"}}],[11,"chunks_lazy","","Return an iterable that can chunk the iterator.",44,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"chunkslazy"}}],[11,"tee","","Split into an iterator pair that both yield all elements from\nthe original iterator.",44,null],[11,"slice","","Return a sliced iterator.",44,{"inputs":[{"name":"itertools"},{"name":"r"}],"output":{"name":"islice"}}],[11,"into_rc","","Return an iterator inside a `Rc<RefCell<_>>` wrapper.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"rciter"}}],[11,"step","","Return an iterator adaptor that steps `n` elements in the base iterator\nfor each iteration.",44,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"step"}}],[11,"merge","","Return an iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",44,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"mergeascend"}}],[11,"merge_by","","Return an iterator adaptor that merges the two base iterators in order.\nThis is much like `.merge()` but allows for a custom ordering.",44,{"inputs":[{"name":"itertools"},{"name":"j"},{"name":"f"}],"output":{"name":"merge"}}],[11,"cartesian_product","","Return an iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators `self` and `J`.",44,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"product"}}],[11,"multipeek","","Return an iterator adapter that allows peeking multiple values.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"multipeek"}}],[11,"coalesce","","Return an iterator adaptor that uses the passed-in closure to\noptionally merge together consecutive elements. For each pair the closure\nis passed the latest two elements, `x`, `y` and may return either `Ok(z)`\nto merge the two values or `Err((x, y))` to indicate they can't be merged.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"coalesce"}}],[11,"dedup","","Remove duplicates from sections of consecutive identical elements.\nIf the iterator is sorted, all elements will be unique.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"coalescefn"}}],[11,"unique","","Return an iterator adaptor that filters out elements that have\nalready been produced once during the iteration. Duplicates\nare detected using hash and equality.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"unique"}}],[11,"unique_by","","Return an iterator adaptor that filters out elements that have\nalready been produced once during the iteration.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"uniqueby"}}],[11,"mend_slices","","Return an iterator adaptor that joins together adjacent slices if possible.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"coalescefn"}}],[11,"take_while_ref","","Return an iterator adaptor that borrows from a `Clone`-able iterator\nto only pick off elements while the predicate `f` returns `true`.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"takewhileref"}}],[11,"while_some","","Return an iterator adaptor that filters `Option<A>` iterator elements\nand produces `A`. Stops on the first `None` encountered.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"whilesome"}}],[11,"combinations","","Return an iterator adaptor that iterates over the combinations of\nthe elements from an iterator.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"combinations"}}],[11,"pad_using","","Return an iterator adaptor that pads the sequence to a minimum length of\n`min` by filling missing elements using a closure `f`.",44,{"inputs":[{"name":"itertools"},{"name":"usize"},{"name":"f"}],"output":{"name":"padusing"}}],[11,"map_fn","","Like regular `.map()`, specialized to using a simple function pointer instead,\nso that the resulting `Map` iterator value can be cloned.",44,null],[11,"fn_map","","**Deprecated:** Use `.map_fn()` instead.",44,null],[11,"find_position","","Find the position and value of the first element satisfying a predicate.",44,{"inputs":[{"name":"itertools"},{"name":"p"}],"output":{"name":"option"}}],[11,"dropn","","Consume the first `n` elements of the iterator eagerly.",44,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"dropping","","Consume the first `n` elements from the iterator eagerly,\nand return the same iterator again.",44,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"dropping_back","","Consume the last `n` elements from the iterator eagerly,\nand return the same iterator again.",44,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"foreach","","Run the closure `f` eagerly on each element of the iterator.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":null}],[11,"collect_vec","","`.collect_vec()` is simply a type specialization of `.collect()`,\nfor convenience.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"vec"}}],[11,"set_from","","Assign to each reference in `self` from the `from` iterator,\nstopping at the shortest of the two iterators.",44,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"usize"}}],[11,"join","","Combine all iterator elements into one String, seperated by `sep`.",44,{"inputs":[{"name":"itertools"},{"name":"str"}],"output":{"name":"string"}}],[11,"format","","Format all iterator elements, separated by `sep`.",44,{"inputs":[{"name":"itertools"},{"name":"str"},{"name":"f"}],"output":{"name":"format"}}],[11,"fold_results","","Fold `Result` values from an iterator.",44,{"inputs":[{"name":"itertools"},{"name":"b"},{"name":"f"}],"output":{"name":"result"}}],[11,"fold1","","Accumulator of the elements in the iterator.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"option"}}],[11,"is_empty_hint","","Tell if the iterator is empty or not according to its size hint.\nReturn `None` if the size hint does not tell, or return a `Some`\nvalue with the emptiness if it's possible to tell.",44,{"inputs":[{"name":"itertools"}],"output":{"name":"option"}}],[11,"sort_by","","Sort iterator elements.",44,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"vec"}}],[14,"iproduct!","","Create an iterator over the “cartesian product” of iterators.",null,null],[14,"izip!","","Create an iterator running multiple iterators in lockstep.",null,null],[14,"icompr!","","**Deprecated:** Will hopefully be replaced by a dedicated\nsyntax extension that can offer real convenient python-like syntax.",null,null]],"paths":[[3,"RcIter"],[3,"Unfold"],[4,"EitherOrBoth"],[3,"Interleave"],[3,"InterleaveShortest"],[3,"FnMap"],[3,"PutBack"],[3,"PutBackN"],[3,"Product"],[3,"Batching"],[3,"GroupBy"],[3,"Step"],[3,"Merge"],[3,"MultiPeek"],[3,"Coalesce"],[3,"TakeWhileRef"],[3,"WhileSome"],[3,"Combinations"],[3,"UniqueBy"],[3,"Format"],[3,"Groups"],[3,"Group"],[3,"Chunks"],[3,"Chunk"],[3,"Intersperse"],[3,"ISlice"],[3,"Linspace"],[8,"IntoIteratorTuple"],[8,"AppendTuple"],[8,"Slice"],[3,"FlatTuples"],[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"PadUsing"],[3,"RepeatN"],[3,"RepeatCall"],[3,"Stride"],[3,"StrideMut"],[3,"Tee"],[3,"Times"],[3,"ZipLongest"],[3,"Zip"],[3,"ZipSlices"],[8,"Itertools"]]};
initSearch(searchIndex);
