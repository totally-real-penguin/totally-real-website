GDPC                @                                                                         P   res://.godot/exported/133200997/export-b869cfa1590ffef44243440297dfa122-dead.scn�       �      $����y���Ȭ�u    T   res://.godot/exported/133200997/export-cce30dd689d5e44431a5ddc6b0f1b807-snake.scn   �      �      !٣�]��s� ]2�3
    ,   res://.godot/global_script_class_cache.cfg                ��Р�8���8~$}P�    D   res://.godot/imported/icon.svg-218a8f2b3041327d8a5756f3a245f83b.ctex�            ：Qt�E�cO���       res://.godot/uid_cache.bin  �#      U       {��ƚL�I�xj���       res://dead.gd           �       ��ќ�|z��X��T�J�       res://dead.tscn.remap   0      a       Ng'�Q�Pc���`K�       res://global.gd �             o��̧ [�6����f       res://icon.svg  0       �      k����X3Y���f       res://icon.svg.import   �      �       ��ZP�J��k	���       res://project.binaryP$      )      ��m+�b����
���       res://snake.gd  �      �      ��h��]��t2\�       res://snake.tscn.remap  �      b       �5���s���}��=�<            extends Control


func _unhandled_input(event: InputEvent) -> void:
	get_tree().change_scene_to_file("snake.tscn")

func _ready() -> void:
	$CenterContainer/Label.text = "Score: " + str(Global.fruit_eaten)
  RSRC                    PackedScene            ��������                                                  resource_local_to_scene    resource_name    default_base_scale    default_font    default_font_size    script 	   _bundled       Script    res://dead.gd ��������      local://Theme_xhw4r c         local://PackedScene_6h77w �         Theme          (            PackedScene          	         names "         Dead    layout_mode    anchors_preset    anchor_right    anchor_bottom    grow_horizontal    grow_vertical    script    Control 
   ColorRect    color    CenterContainer    Label    theme    	   variants                        �?                                       �?                node_count             nodes     H   ��������       ����                                                          	   	   ����                                       
                        ����                                                        ����                         conn_count              conns               node_paths              editable_instances              version             RSRC        extends Node

var fruit_eaten
  GST2   �   �      ����               � �        �  RIFF�  WEBPVP8L�  /������!"2�H�m�m۬�}�p,��5xi�d�M���)3��$�V������3���$G�$2#�Z��v{Z�lێ=W�~� �����d�vF���h���ڋ��F����1��ڶ�i�엵���bVff3/���Vff���Ҿ%���qd���m�J�}����t�"<�,���`B �m���]ILb�����Cp�F�D�=���c*��XA6���$
2#�E.@$���A.T�p )��#L��;Ev9	Б )��D)�f(qA�r�3A�,#ѐA6��npy:<ƨ�Ӱ����dK���|��m�v�N�>��n�e�(�	>����ٍ!x��y�:��9��4�C���#�Ka���9�i]9m��h�{Bb�k@�t��:s����¼@>&�r� ��w�GA����ը>�l�;��:�
�wT���]�i]zݥ~@o��>l�|�2�Ż}�:�S�;5�-�¸ߥW�vi�OA�x��Wwk�f��{�+�h�i�
4�˰^91��z�8�(��yޔ7֛�;0����^en2�2i�s�)3�E�f��Lt�YZ���f-�[u2}��^q����P��r��v��
�Dd��ݷ@��&���F2�%�XZ!�5�.s�:�!�Њ�Ǝ��(��e!m��E$IQ�=VX'�E1oܪì�v��47�Fы�K챂D�Z�#[1-�7�Js��!�W.3׹p���R�R�Ctb������y��lT ��Z�4�729f�Ј)w��T0Ĕ�ix�\�b�9�<%�#Ɩs�Z�O�mjX �qZ0W����E�Y�ڨD!�$G�v����BJ�f|pq8��5�g�o��9�l�?���Q˝+U�	>�7�K��z�t����n�H�+��FbQ9���3g-UCv���-�n�*���E��A�҂
�Dʶ� ��WA�d�j��+�5�Ȓ���"���n�U��^�����$G��WX+\^�"�h.���M�3�e.
����MX�K,�Jfѕ*N�^�o2��:ՙ�#o�e.
��p�"<W22ENd�4B�V4x0=حZ�y����\^�J��dg��_4�oW�d�ĭ:Q��7c�ڡ��
A>��E�q�e-��2�=Ϲkh���*���jh�?4�QK��y@'�����zu;<-��|�����Y٠m|�+ۡII+^���L5j+�QK]����I �y��[�����(}�*>+���$��A3�EPg�K{��_;�v�K@���U��� gO��g��F� ���gW� �#J$��U~��-��u���������N�@���2@1��Vs���Ŷ`����Dd$R�":$ x��@�t���+D�}� \F�|��h��>�B�����B#�*6��  ��:���< ���=�P!���G@0��a��N�D�'hX�׀ "5#�l"j߸��n������w@ K�@A3�c s`\���J2�@#�_ 8�����I1�&��EN � 3T�����MEp9N�@�B���?ϓb�C��� � ��+�����N-s�M�  ��k���yA 7 �%@��&��c��� �4�{� � �����"(�ԗ�� �t�!"��TJN�2�O~� fB�R3?�������`��@�f!zD��%|��Z��ʈX��Ǐ�^�b��#5� }ى`�u�S6�F�"'U�JB/!5�>ԫ�������/��;	��O�!z����@�/�'�F�D"#��h�a �׆\-������ Xf  @ �q�`��鎊��M��T�� ���0���}�x^�����.�s�l�>�.�O��J�d/F�ě|+^�3�BS����>2S����L�2ޣm�=�Έ���[��6>���TъÞ.<m�3^iжC���D5�抺�����wO"F�Qv�ږ�Po͕ʾ��"��B��כS�p�
��E1e�������*c�������v���%'ž��&=�Y�ް>1�/E������}�_��#��|������ФT7׉����u������>����0����緗?47�j�b^�7�ě�5�7�����|t�H�Ե�1#�~��>�̮�|/y�,ol�|o.��QJ rmϘO���:��n�ϯ�1�Z��ը�u9�A������Yg��a�\���x���l���(����L��a��q��%`�O6~1�9���d�O{�Vd��	��r\�՜Yd$�,�P'�~�|Z!�v{�N�`���T����3?DwD��X3l �����*����7l�h����	;�ߚ�;h���i�0�6	>��-�/�&}% %��8���=+��N�1�Ye��宠p�kb_����$P�i�5�]��:��Wb�����������ě|��[3l����`��# -���KQ�W�O��eǛ�"�7�Ƭ�љ�WZ�:|���є9�Y5�m7�����o������F^ߋ������������������Р��Ze�>�������������?H^����&=����~�?ڭ�>���Np�3��~���J�5jk�5!ˀ�"�aM��Z%�-,�QU⃳����m����:�#��������<�o�����ۇ���ˇ/�u�S9��������ٲG}��?~<�]��?>��u��9��_7=}�����~����jN���2�%>�K�C�T���"������Ģ~$�Cc�J�I�s�? wڻU���ə��KJ7����+U%��$x�6
�$0�T����E45������G���U7�3��Z��󴘶�L�������^	dW{q����d�lQ-��u.�:{�������Q��_'�X*�e�:�7��.1�#���(� �k����E�Q��=�	�:e[����u��	�*�PF%*"+B��QKc˪�:Y��ـĘ��ʴ�b�1�������\w����n���l镲��l��i#����!WĶ��L}rեm|�{�\�<mۇ�B�HQ���m�����x�a�j9.�cRD�@��fi9O�.e�@�+�4�<�������v4�[���#bD�j��W����֢4�[>.�c�1-�R�����N�v��[�O�>��v�e�66$����P
�HQ��9���r�	5FO� �<���1f����kH���e�;����ˆB�1C���j@��qdK|
����4ŧ�f�Q��+�     [remap]

importer="texture"
type="CompressedTexture2D"
uid="uid://dxa2xgknnj33h"
path="res://.godot/imported/icon.svg-218a8f2b3041327d8a5756f3a245f83b.ctex"
metadata={
"vram_texture": false
}
                extends Node2D

var map_size = Vector2i(40,24)
var snake = [[2, 1], [2, 2], [2, 3]]
var fruits = []

var dir= [0,1]

var fruit_num = 3

var cell_size = Vector2i(24,24)

var died : bool


func _ready() -> void:
	Global.fruit_eaten = 0
	for i in range(0,fruit_num):
		fruits.append(gen_fruit())


func _draw() -> void:
	for y in map_size.y:
		for x in map_size.x:
			var cell = Rect2(Vector2(x * cell_size.x,y * cell_size.y),cell_size)
			if [x,y] == snake[-1]:
				draw_rect(cell,Color.LIGHT_GREEN)
			elif [x,y] in snake:
				draw_rect(cell,Color.GREEN)
			elif [x,y] in fruits:
				draw_rect(cell,Color.RED)
			else:
				draw_rect(cell,Color.BLACK)

func _physics_process(_delta: float) -> void:
	if Input.is_action_just_pressed('ui_up') and snake[-2] != [snake[-1][0], snake[-1][1] - 1] :
		dir = [0,-1]
	if Input.is_action_just_pressed('ui_down') and snake[-2] != [snake[-1][0], snake[-1][1] + 1]:
		dir = [0,1]
	if Input.is_action_just_pressed('ui_right') and snake[-2] != [snake[-1][0] + 1, snake[-1][1]]:
		dir = [1,0]
	if Input.is_action_just_pressed('ui_left') and snake[-2] != [snake[-1][0] - 1, snake[-1][1]]:
		dir = [-1,0]


func gen_fruit():
	var fruit = [randi_range(0, map_size.x - 1),randi_range(0, map_size.y - 1)]
	while fruit in snake and fruit :
		fruit[0] = randi_range(0, map_size.x - 1)
		fruit[1] = randi_range(0, map_size.y - 1)
	return fruit

func movement():
	var head_pos = [snake[-1][0] + dir[0],snake[-1][1] + dir[1]]

	if snake[-1][0] in [-1, map_size.x] or snake[-1][1] in [-1, map_size.y]:
		print("died")
		died = true
		return

	if head_pos not in snake.slice(1,-1) and died == false:
		snake.append(head_pos)
		if head_pos in fruits:
			Global.fruit_eaten += 1
			fruits.pop_at(fruits.find(head_pos))
			fruits.append(gen_fruit())
		else:
			snake.pop_front()
	elif head_pos == snake[-2]:
			pass
	else:
			died = true
			print("died")



func _on_timer_timeout() -> void:
	if died != true:
		movement()
		self.queue_redraw()
	else:
		get_tree().change_scene_to_file("dead.tscn")
RSRC                    PackedScene            ��������                                                  resource_local_to_scene    resource_name 	   _bundled    script       Script    res://snake.gd ��������      local://PackedScene_whmc5          PackedScene          	         names "         Snake    script    Node2D    Timer 
   wait_time 
   autostart 	   Camera2D    anchor_mode    limit_left 
   limit_top    _on_timer_timeout    timeout    	   variants                 )   �������?                   node_count             nodes     !   ��������       ����                            ����                                 ����               	                conn_count             conns                  
                    node_paths              editable_instances              version             RSRC             [remap]

path="res://.godot/exported/133200997/export-b869cfa1590ffef44243440297dfa122-dead.scn"
               [remap]

path="res://.godot/exported/133200997/export-cce30dd689d5e44431a5ddc6b0f1b807-snake.scn"
              list=Array[Dictionary]([])
     <svg height="128" width="128" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="124" height="124" rx="14" fill="#363d52" stroke="#212532" stroke-width="4"/><g transform="scale(.101) translate(122 122)"><g fill="#fff"><path d="M105 673v33q407 354 814 0v-33z"/><path d="m105 673 152 14q12 1 15 14l4 67 132 10 8-61q2-11 15-15h162q13 4 15 15l8 61 132-10 4-67q3-13 15-14l152-14V427q30-39 56-81-35-59-83-108-43 20-82 47-40-37-88-64 7-51 8-102-59-28-123-42-26 43-46 89-49-7-98 0-20-46-46-89-64 14-123 42 1 51 8 102-48 27-88 64-39-27-82-47-48 49-83 108 26 42 56 81zm0 33v39c0 276 813 276 814 0v-39l-134 12-5 69q-2 10-14 13l-162 11q-12 0-16-11l-10-65H446l-10 65q-4 11-16 11l-162-11q-12-3-14-13l-5-69z" fill="#478cbf"/><path d="M483 600c0 34 58 34 58 0v-86c0-34-58-34-58 0z"/><circle cx="725" cy="526" r="90"/><circle cx="299" cy="526" r="90"/></g><g fill="#414042"><circle cx="307" cy="532" r="60"/><circle cx="717" cy="532" r="60"/></g></g></svg>
              ԩ��#�H   res://dead.tscn�,cR�y   res://icon.svg9_��a{W   res://snake.tscn           ECFG
      application/config/name         snake      application/run/main_scene         res://snake.tscn   application/config/features$   "         4.2    Forward Plus       application/config/icon         res://icon.svg     autoload/Global         *res://global.gd"   display/window/size/viewport_width      �  #   display/window/size/viewport_height      @     display/window/stretch/mode         canvas_items   dotnet/project/assembly_name         snake   #   rendering/renderer/rendering_method         mobile         