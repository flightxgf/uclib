Ext.data.JsonP.array_t({"tagname":"class","name":"array_t","autodetected":{},"files":[{"filename":"array.js","href":"array.html#array_t"}],"members":[{"name":"array_append","tagname":"method","owner":"array_t","id":"method-array_append","meta":{}},{"name":"array_create","tagname":"method","owner":"array_t","id":"method-array_create","meta":{}},{"name":"array_delete","tagname":"method","owner":"array_t","id":"method-array_delete","meta":{}},{"name":"array_destroy","tagname":"method","owner":"array_t","id":"method-array_destroy","meta":{}},{"name":"array_find","tagname":"method","owner":"array_t","id":"method-array_find","meta":{}},{"name":"array_foreach","tagname":"method","owner":"array_t","id":"method-array_foreach","meta":{}},{"name":"array_get","tagname":"method","owner":"array_t","id":"method-array_get","meta":{}},{"name":"array_insert","tagname":"method","owner":"array_t","id":"method-array_insert","meta":{}},{"name":"array_prepend","tagname":"method","owner":"array_t","id":"method-array_prepend","meta":{}},{"name":"array_set","tagname":"method","owner":"array_t","id":"method-array_set","meta":{}},{"name":"array_size","tagname":"method","owner":"array_t","id":"method-array_size","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-array_t","short_doc":"动态数组\n根据数据项的个数自动扩展数组的长度。 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/array.html#array_t' target='_blank'>array.js</a></div></pre><div class='doc-contents'><p>动态数组\n根据数据项的个数自动扩展数组的长度。\n公共数据成员可以读取，但是不能修改。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-array_append' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_append' class='name expandable'>array_append</a>( <span class='pre'>array, data</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>在数组中后面插入元素。 ...</div><div class='long'><p>在数组中后面插入元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>data</span> : value_t<div class='sub-desc'><p>元素的值。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-array_create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_create' class='name expandable'>array_create</a>( <span class='pre'></span> ) : array_t*<span class=\"signature\"></span></div><div class='description'><div class='short'>创建动态数组。 ...</div><div class='long'><p>创建动态数组。</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>array_t*</span><div class='sub-desc'><p>数组对象。</p>\n</div></li></ul></div></div></div><div id='method-array_delete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_delete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_delete' class='name expandable'>array_delete</a>( <span class='pre'>array, index</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>删除数组中指定索引的元素。 ...</div><div class='long'><p>删除数组中指定索引的元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>index</span> : uint32_t<div class='sub-desc'><p>索引。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-array_destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_destroy' class='name expandable'>array_destroy</a>( <span class='pre'>array</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>销毁数组。 ...</div><div class='long'><p>销毁数组。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'><p>无。</p>\n</div></li></ul></div></div></div><div id='method-array_find' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_find' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_find' class='name expandable'>array_find</a>( <span class='pre'>array, cmp, ctx</span> ) : int<span class=\"signature\"></span></div><div class='description'><div class='short'>在数组中查找指定的元素。 ...</div><div class='long'><p>在数组中查找指定的元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>cmp</span> : compare_t<div class='sub-desc'><p>比较函数。</p>\n</div></li><li><span class='pre'>ctx</span> : void*<div class='sub-desc'><p>比较函数的上下文。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>成功返回元素的索引，失败返回-1。</p>\n</div></li></ul></div></div></div><div id='method-array_foreach' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_foreach' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_foreach' class='name expandable'>array_foreach</a>( <span class='pre'>array</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>清除数组中的元素。 ...</div><div class='long'><p>清除数组中的元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-array_get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_get' class='name expandable'>array_get</a>( <span class='pre'>array, index</span> ) : value_t<span class=\"signature\"></span></div><div class='description'><div class='short'>获取数组中指定索引的元素。 ...</div><div class='long'><p>获取数组中指定索引的元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>index</span> : uint32_t<div class='sub-desc'><p>索引。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>value_t</span><div class='sub-desc'><p>元素。</p>\n</div></li></ul></div></div></div><div id='method-array_insert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_insert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_insert' class='name expandable'>array_insert</a>( <span class='pre'>array, index, data</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>在数组中指定索引的位置插入元素。 ...</div><div class='long'><p>在数组中指定索引的位置插入元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>index</span> : uint32_t<div class='sub-desc'><p>索引。</p>\n</div></li><li><span class='pre'>data</span> : value_t<div class='sub-desc'><p>元素的值。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-array_prepend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_prepend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_prepend' class='name expandable'>array_prepend</a>( <span class='pre'>array, data</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>在数组中前面插入元素。 ...</div><div class='long'><p>在数组中前面插入元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>data</span> : value_t<div class='sub-desc'><p>元素的值。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-array_set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_set' class='name expandable'>array_set</a>( <span class='pre'>array, index, data</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>设置数组中指定索引的元素。 ...</div><div class='long'><p>设置数组中指定索引的元素。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li><li><span class='pre'>index</span> : uint32_t<div class='sub-desc'><p>索引。</p>\n</div></li><li><span class='pre'>data</span> : value_t<div class='sub-desc'><p>元素的值。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-array_size' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='array_t'>array_t</span><br/><a href='source/array.html#array_t-method-array_size' target='_blank' class='view-source'>view source</a></div><a href='#!/api/array_t-method-array_size' class='name expandable'>array_size</a>( <span class='pre'>array</span> ) : uint32_t<span class=\"signature\"></span></div><div class='description'><div class='short'>获取数组中元素的个数。 ...</div><div class='long'><p>获取数组中元素的个数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : array_t*<div class='sub-desc'><p>数组对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>uint32_t</span><div class='sub-desc'><p>元素的个数。</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});